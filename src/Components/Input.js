import { useState } from 'react';

export default function Input({onAdd}) {
    const [text,setText] = useState('')

    const handleChange = (e) => setText(e.target.value)

    const handlekeyDown = (e) => {
        if (e.key === 'Enter') {
            onAdd(text);
            setText('');
        }
    }

    return (
        <div className='panel-block'>
            <input
                className="input"
                type="text"
                placeholder='enter to add'
                value={text}
                onChange={handleChange}
                onKeyDown={handlekeyDown}
            />
        </div>
    )
}