'use client'
import { use } from 'react';
import MasInfoPokemons from '@/componentes/MasInfoPokemons';

export default function Page({ params }){
    const {id} = use(params);

    return (
        <MasInfoPokemons id={id}/>
    );
}