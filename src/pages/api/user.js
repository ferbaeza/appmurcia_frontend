
export default function handler(req, res) {
  try{
    res.status(200).json({ 
      name: 'John Doe',
      name: 'John Doe',
    })
  }catch{
    res.status(400).json({ success: false })
  }
}

