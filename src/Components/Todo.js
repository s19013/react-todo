import { useState } from 'react';
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

export default function Todo() {
    const getKey = () => Math.random().toString(32).substring(2);

    const [items,setItems] = useState([
        { key: getKey(), text: 'Learn JavaScript', done: false },
        { key: getKey(), text: 'Learn React', done: false },
        { key: getKey(), text: 'Get some good sleep', done: false },
    ])

    const [filter,setFilter] = useState('ALL');
    const handleFilterChange = value => setFilter(value);

    // 表示用の変数
    const displayItems =items.filter(item => {
        if (filter === 'ALL') {return true}
        if (filter === 'TODO') {return !item.done}
        if (filter === 'DONE') {return item.done}
    })

    // チャックを付けたり消したりした時に動かすやつ
    const handleCheck = (checked) => {
        // 配列内の変化したアイテムがどれか調べて状態を変化させる
        const newItems = items.map(item => {
            if (item.key === checked.key) {
                item.done = !item.done
            }

            return item
        })

        // 状態変化させた配列をセット
        setItems(newItems)
    }

    const handleAdd = (text) => {
        // ...items  itemsをコピー
        // ,{追加したいデータ}
        setItems([...items,{key:getKey(),text,done:false}])
    }

    return (
    <div className="panel">
    <div className="panel-heading">
        React ToDo
    </div>

    <Input onAdd={handleAdd} />
    <Filter
        onChange={handleFilterChange}
        value={filter}
    />
    {displayItems.map(item => (
        <TodoItem 
            key={item.key} 
            item={item} 
            onCheck={handleCheck}
        />
    ))}
    <div className="panel-block">
        {displayItems.length} items
    </div>
    </div>
    )
}