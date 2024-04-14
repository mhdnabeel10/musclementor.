//export const API_KEY="0a11f2649ed585f4d0bd9fb2f530201ce918a1f0"
//export const BaseUrl="https://wger.de/api/v2"

useEffect(() => {
    axios.get("https://wger.de/api/v2/muscle/?api_key=0a11f2649ed585f4d0bd9fb2f530201ce918a1f0").then(res=>{
      console.log(res.data);
    })
  
  }, [])