import * as http from 'http';

http.get('http://cat-fact.herokuapp.com/facts', (res) => {
    res.on('data', (chunk: Buffer) => {
        const catFacts = JSON.parse(chunk.toString());
        const fact = catFacts.find(elem => elem._id === '58e008780aac31001185ed05');
        if(!fact) throw Error('Fact not found for this id');
        console.log(fact.text);
    });
})

