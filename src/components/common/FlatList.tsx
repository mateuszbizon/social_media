import React, { ComponentProps, Key, ReactNode } from 'react'

type FlatListProps<T> = {
    data: T[]
    renderItem: (item: T, index: number) => ReactNode
    renderEmptyListComponent?: () => ReactNode
    keyExtractor?: (item: T) => Key
    itemListProps?: () => ComponentProps<"li">
} & ComponentProps<"ul">

function FlatList<T>({ data, renderItem, renderEmptyListComponent, keyExtractor, itemListProps, className, ...props }: FlatListProps<T>) {
  return (
    <ul className={className} {...props}>
        {data.map((item, index) => {
            const itemProps = itemListProps ? itemListProps() : {}

            return (
                <li key={keyExtractor && keyExtractor(item)} {...itemProps}>
                    {renderItem(item, index)}
                </li>
            )
        })}
        {renderEmptyListComponent && data.length == 0 && renderEmptyListComponent()}
    </ul>
  )
}

export default FlatList