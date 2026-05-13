async function handleFormSubmit(e: SubmitEvent) {
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage);
    try {
        if (!textarea) return;
        await submitForm(textarea.value);
        show(successMessage);
        hide(form);
    } catch (err: any) {
        if (!errorMessage) return;
        show(errorMessage);
        errorMessage.textContent = err.message;
    } finally {
        hide(loadingMessage);
        enable(textarea);
        enable(button);
    }
}

function handleTextareaChange() {
    if (!textarea) return;
    if (textarea.value.length === 0) {
        disable(button);
    } else {
        enable(button);
    }
}

function hide(el: HTMLElement | null) {
    if (el) el.style.display = 'none';
}

function show(el: HTMLElement | null) {
    if (el) el.style.display = '';
}

function enable(el: HTMLButtonElement | HTMLTextAreaElement | null) {
    if (el) el.disabled = false;
}

function disable(el: HTMLButtonElement | HTMLTextAreaElement | null) {
    if (el) el.disabled = true;
}

function submitForm(answer: string): Promise<void> {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() === 'istanbul') {
                resolve();
            } else {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            }
        }, 1500);
    });
}

const form = document.getElementById('form') as HTMLFormElement | null;
const textarea = document.getElementById('textarea') as HTMLTextAreaElement | null;
const button = document.getElementById('button') as HTMLButtonElement | null;
const loadingMessage = document.getElementById('loading') as HTMLElement | null;
const errorMessage = document.getElementById('error') as HTMLElement | null;
const successMessage = document.getElementById('success') as HTMLElement | null;

if (form && textarea && button) {
    form.onsubmit = handleFormSubmit;
    textarea.oninput = handleTextareaChange;
}