import { render } from '@testing-library/react'

import Post from '../../components/Post';

import { Person } from '../../interfaces/person.interface';


describe('Pruebas de componente', () => {
    test('debe de hacer match con el snapshot', () => {

        const person: Person = {
            id: 2,
            name: 'prueba',
            status: 'lorems',
            species: 'human',
            type: '2',
            gender: 'Male',
            episode: ['uno'],
            url: 'lorems.com',
            created: '23-10-2022',
            image: 'https://fakeimg.pl/250x100/ff0000'
        }

        const component = render(<Post key={1} person={person}/>);
        
    })
})