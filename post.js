
const url = 'https://jsonplaceholder.typicode.com';

const payload = {
    title: 'My first post',
        body: 'This is my post content.',
            userId: 1
            };

            const settings = {
                method: 'POST',
                    body: JSON.stringify(payload),
                        headers: {
                                'Content-Type': 'application/json'
                                    }
                                    };

                                    fetch(`${url}/posts`, settings)
                                        .then(response => {
                                                console.log(response);

                                                        if (!response.ok) {
                                                                    throw new Error('Request failed');
                                                                            }

                                                                                    return response.json();
                                                                                        })
                                                                                            .then(data => {
                                                                                                    console.log('Promise fulfilled:');
                                                                                                            console.log(data);
                                                                                                                })
                                                                                                                    .catch(err => {
                                                                                                                            console.log('Promise rejected:');
                                                                                                                                    console.log(err);
                                                                                                                                        });
                                                                                                                                        