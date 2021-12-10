import type { NextPage } from 'next'
import Link from 'next/link';
import * as React from 'react';
import { Fragment } from 'react';

interface Props {
  name:string,
  location: string,
  key:number
}

interface State {
  // state types
}


const plantList = [
   {name: "Birch", location: "Europe"},
   {name: "Oak", location: "Europe"},
   {name: "Dandilion", location: "Europe, Asia"}
];

const numbers = [1, 2, 3, 4, 5];


export default function Plants() {
   return (
      <Fragment>
         
         This is all my pretty plants! 
         {
            plantList.map((value, i) => <Plant name={value.name} location={value.location} key={i} />)
         }
         
         <Back/>
      </Fragment>
   )
}


function Back() {
   return (
      <Fragment>
         <div>
            <Link href="/">
               <a>Back</a>
            </Link>
         </div>      
      </Fragment>
   )
}

function Test(props:Props) {
   return <Fragment>Hej, {props.number}</Fragment>
}

function Plant(props: Props) {
   return (
      <Fragment>
         <p>This is a {props.name}. They can be found in {props.location}.</p>
      </Fragment>
   );
}

      