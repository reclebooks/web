const initialize = async () => {
    const {nickname, description} = await fetch('asdsasad').then(data => data.json());

    document.querySelector('#nickname').textContent = await fetch('');
}