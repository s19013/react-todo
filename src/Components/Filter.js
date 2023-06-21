export default function Filter({value,onChange}) {
    const handleClick = (key,e) => {
        // eの動きを止める(多分)
        // e.preventDefault();
        onChange(key);
    };

    return (
        <div className="panel-tabs">
            <p 
                onClick={() => handleClick("ALL")}
                className={value === 'ALL' ? 'is-active':''}
            >
                ALL
            </p>
            <p 
                onClick={() => handleClick("TODO")}
                className={value === 'TODO' ? 'is-active':''}
            >
                TODO
            </p>
            <p 
                onClick={() => handleClick("DONE")}
                className={value === 'DONE' ? 'is-active':''}
            >
                DONE
            </p>
        </div>
    )
}