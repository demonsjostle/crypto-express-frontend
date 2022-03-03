import React from "react";
import { CharacterElem } from "./Elements/CharacterElem";
import { ImageContext } from './Elements/ContentElem'

function Character() {
  return (
    <>
      <CharacterElem>
        <ImageContext/>
        <ImageContext/>
        <ImageContext/>
      </CharacterElem>
    </>
  );
}

export default Character;
