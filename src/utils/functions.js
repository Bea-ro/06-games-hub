const startPlay = () => {
    const random = Math.floor(Math.random() * randomVariable.length);
    setDisabled(true);
    setMessage(message)

    // (randomVariable, message) 
 // words // player
 // `Tienes 10 intentos` // `Es el turno de ${player}`
 

    setPlayer(players[randomPlayer]);   
    setCells(emptyGameboard);
  };



 
 setWord(words[randomWord]);
    setAttemps(10)
    setSolution("");
    setFails([]);    
    keyRefs.current.forEach((keyRef) => keyRef.disabled = false);  
