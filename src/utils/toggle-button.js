export  const toggleButton = (id) => {
    if (id === 'solve-button') {
      setHidden(!hidden)
    } else if (id === 'check-button') {
      setHidden(!hidden);
    }
  }  