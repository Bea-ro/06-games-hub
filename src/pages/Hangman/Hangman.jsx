import React, { useState, useEffect, useRef, createContext } from 'react';
import GameHeader from '../../components/Headers/GameHeader';
import HangmanStart from '../../components/ui/Buttons/HangmanStart';
import Message from '../../components/ui/Message/Message';
import HangmanGameboard from '../../components/Hangman/HangmanGameboard';

export const HangmanContext = createContext();

const Hangman = ({ message, setMessage }) => {
  const [word, setWord] = useState('?');
  const [disabled, setDisabled] = useState(false);
  const [attemps, setAttemps] = useState(10);
  const [wrongs, setWrongs] = useState([]);
  const [rights, setRights] = useState([]);
  const [solution, setSolution] = useState('');
  const keyRefs = useRef([]);

  useEffect(() => {
    setMessage('');
  }, []);

  return (
    <>
      <HangmanContext.Provider
        value={{
          word: word,
          setWord: setWord,
          setMessage: setMessage,
          disabled: disabled,
          setDisabled: setDisabled,
          setAttemps: setAttemps,
          setSolution: setSolution,
          setWrongs: setWrongs,
          rights: rights,
          setRights: setRights,
          keyRefs: keyRefs
        }}
      >
        <GameHeader StartButton={HangmanStart} game="Ahorcado" />

        <main>
          <Message message={message} />
          <HangmanGameboard
            word={word}
            attemps={attemps}
            setMessage={setMessage}
            setDisabled={setDisabled}
            solution={solution}
            wrongs={wrongs}
          />
        </main>
      </HangmanContext.Provider>
    </>
  );
};

export default Hangman;
