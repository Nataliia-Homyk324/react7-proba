export const selectIsLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectContacts = (state) => state.contacts.items;

export const selectNameFilter = state => state.filters.name;