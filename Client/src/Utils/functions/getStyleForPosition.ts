import styles from '../../Components/personRow/personRow.module.scss';
export const getStyleForPosition: (
    index: number,
    isPersonChecked: boolean,
    isChecked: boolean
) => string = (
    index: number,
    isPersonChecked: boolean,
    isChecked: boolean
): string => {
    return `${styles.position} ${
        isChecked || isPersonChecked
            ? styles.checkedPosition
            : index % 2 === 0
            ? styles.oddPosition
            : ''
    } `;
};
