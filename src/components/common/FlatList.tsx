import React, { ComponentProps, Key, ReactNode } from 'react'

type FlatListProps<T> = {
    data: T[]
    renderItem: (item: T, index: number) => ReactNode
    renderEmptyListComponent?: () => ReactNode
    keyExtractor?: (item: T) => Key
} & ComponentProps<"ul">

function FlatList<T>({ data, renderItem, renderEmptyListComponent, keyExtractor, className }: FlatListProps<T>) {
  return (
    <ul className={className}>
        {data.map((item, index) => (
            <li key={keyExtractor && keyExtractor(item)}>
                {renderItem(item, index)}
            </li>
        ))}
        {renderEmptyListComponent && data.length == 0 && renderEmptyListComponent()}
    </ul>
  )
}

export default FlatList