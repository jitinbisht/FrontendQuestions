export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

==============
  
  export default function App() {
    const [name, setName] = useLocalStorage('name', '');
    return (
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
    )
  }
  
  //
  When we refresh the page, the input box will retain the value of the text typed in it.
