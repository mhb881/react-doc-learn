export interface MessengerState {
    selectedId: number;
    messages: Record<number, string>;
}

export const initialState = {
    selectedId: 0,
    messages: {
        0: '你好, Taylor',
        1: '你好, Alice',
        2: '你好, Bob',
    },
};

export type MessengerAction =
    | { type: 'changed_selection', contactId: number }
    | { type: 'edited_message', message: string }
    | { type: 'sent_message' };

export function messengerReducer(state: MessengerState, action: MessengerAction) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case 'edited_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message,
                },
            };
        }
        case 'sent_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: '',
                },
            };
        }
        default: {
            throw Error('未知 action：' + (action as { type: string }).type);
        }
    }
}
