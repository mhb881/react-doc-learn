import type { Person } from "../types/types";

export function getImageUrl(person: Person) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    );
}

function simplyDeepClone<S>(value: S) {
    // null 或非对象直接返回
    if (value === null || typeof value !== 'object') return value;
    // 处理 Date
    if (value instanceof Date) return new Date(value);
    // 处理 RegExp
    if (value instanceof RegExp) return new RegExp(value.source, value.flags);

    const clone: any = Array.isArray(value) ? [] : {};
    // for...in 语句迭代一个对象的所有可枚举字符串属性（除 Symbol 以外），包括继承的可枚举属性。
    for (let key in value) {
        console.log(key);
        clone[key] = simplyDeepClone(value[key]);
    }
    return clone;
}

function deepClone(value: any, hash = new WeakMap()) {
    // null 或非对象直接返回
    if (value === null || typeof value !== 'object') return value;
    // 处理 Date
    if (value instanceof Date) return new Date(value);
    // 处理 RegExp
    if (value instanceof RegExp) return new RegExp(value.source, value.flags);

    if (hash.has(value)) return hash.get(value);

    const clone: any = Array.isArray(value) ? [] : {};
    hash.set(value, clone);

    Reflect.ownKeys(value).forEach((key) => {
        clone[key] = deepClone(value[key], hash);
    });

    return clone;
}

function deepCloneFinal(value: any, hash = new WeakMap()) {
    // 原始值 或 null/undefined
    if (value == null || typeof value !== 'object') return value;

    // 处理循环引用
    if (hash.has(value)) return hash.get(value);

    // 处理 Date
    if (value instanceof Date) {
        const clone = new Date(value);
        hash.set(value, clone);
        return clone;
    }

    // 处理 RegExp
    if (value instanceof RegExp) {
        const clone = new RegExp(value.source, value.flags);
        hash.set(value, clone);
        return clone;
    }

    // 处理 Map
    if (value instanceof Map) {
        const clone = new Map();
        hash.set(value, clone);
        for (const [k, v] of value) {
            clone.set(deepClone(k, hash), deepClone(v, hash));
        }
        return clone;
    }

    // 处理 Set
    if (value instanceof Set) {
        const clone = new Set();
        hash.set(value, clone);
        for (const item of value) {
            clone.add(deepClone(item, hash));
        }
        return clone;
    }

    // 处理原始类型包装对象 (new Number, new String, new Boolean)
    if (value instanceof Number || value instanceof String || value instanceof Boolean) {
        // 对于原始类型包装对象，最简洁可靠的方式是使用 Object()，它可以直接将原始值包装成对应的对象
        const clone = Object(value.valueOf());
        hash.set(value, clone);
        return clone;
    }

    // 处理数组
    if (Array.isArray(value)) {
        const clone = new Array(value.length);
        hash.set(value, clone);
        for (let i = 0; i < value.length; i++) {
            clone[i] = deepClone(value[i], hash);
        }
        return clone;
    }

    // 处理普通对象：用原型创建，保留 __proto__
    const proto = Object.getPrototypeOf(value);
    const clone = Object.create(proto);
    hash.set(value, clone);

    // 遍历所有自有属性（包括 Symbol 和不可枚举）
    const keys = Reflect.ownKeys(value);
    for (const key of keys) {
        const descriptor: any = Object.getOwnPropertyDescriptor(value, key);
        if (descriptor.value) {
            descriptor.value = deepClone(descriptor.value, hash);
        }
        Object.defineProperty(clone, key, descriptor);
    }

    // 保留对象状态（冻结、密封）
    if (Object.isFrozen(value)) {
        Object.freeze(clone);
    } else if (Object.isSealed(value)) {
        Object.seal(clone);
    }

    return clone;
}

// 生成一个测试对象
export function createTestObject() {
    const obj = {
        name: 'Taylor',
        imageId: '7vQD0fP',
        theme: {
            backgroundColor: '#556270',
            color: '#ffffff'
        },
        profession: 'Software Engineer',
        accomplishment: 'Won a gold medal in the 2012 Summer Olympics in China!',
        num: 123,
        str: "hello",
        date: new Intl.DateTimeFormat("zh-CN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone: "Asia/Shanghai",
            timeZoneName: "short",
        }).format(new Date()),
        regex: /abc/gi,
        sym: Symbol("key"),
        nested: { a: 1 },
        arr: [1, 2, "aaa", "abc"],
        func: function () { console.log("Hello!"); },
    };
    return deepCloneFinal(obj);
}

// console.log(createTestObject());
