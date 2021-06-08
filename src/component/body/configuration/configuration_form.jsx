export const ConfigurationForm = () => {
    return (
        <div className='card mb-4 collapse' id='configurationForm'>
            <div className='card-body'>
                <form action='http://localhost:5000/api/configuration' method='post'>
                    <input type='text' name='name' /><br/>
                    <input type='text' name='query' /><br/>
                    <input type='submit' />
                </form>
            </div>
        </div>

    );
};
