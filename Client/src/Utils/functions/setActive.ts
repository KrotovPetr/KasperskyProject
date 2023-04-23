import queryString from 'query-string';
export const setActive = (columnName: string, sortType: string): string => {
    let query: string = '';
    let currentSortObject = queryString.parse(sortType);
    if (currentSortObject.currentColumnSort === columnName) {
        let sortDirection: string =
            currentSortObject.sortDirection === 'ASC' ? 'DESC' : 'ASC';
        query = queryString.stringify({
            currentColumnSort: columnName,
            sortDirection,
            searchPattern: currentSortObject.searchPattern,
        });
    } else {
        query = queryString.stringify({
            currentColumnSort: columnName,
            sortDirection: 'DESC',
            searchPattern: currentSortObject.searchPattern,
        });
    }
    return query;
};
