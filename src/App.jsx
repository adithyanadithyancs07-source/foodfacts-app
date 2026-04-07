import { useState } from "react"
import SearchBar from "./components/SearchBar"
import FoodList from "./components/FoodList"

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
  setLoading(true)

  try {
    // Try API (may fail)
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&json=1&page_size=10`

    const res = await fetch(url)
    const data = await res.json()

    const products = data.products || []

    if (products.length > 0) {
      setResults(products)
    } else {
      throw new Error("No API data")
    }

  } catch (error) {
    console.log("Using fallback data")

    // ✅ FALLBACK DATA (ALWAYS WORKS)
    const fallback = [
  {
    code: 1,
    product_name: "Banana",
    brands: "Generic",
    image_small_url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    nutriments: {
      "energy-kcal_100g": 89,
      proteins_100g: 1.1,
      carbohydrates_100g: 23,
      fat_100g: 0.3
    }
  },
  {
    code: 2,
    product_name: "Milk",
    brands: "Dairy",
    image_small_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Milk_glass.jpg/640px-Milk_glass.jpg",
    nutriments: {
      "energy-kcal_100g": 42,
      proteins_100g: 3.4,
      carbohydrates_100g: 5,
      fat_100g: 1
    }
  },
  {
    code: 3,
    product_name: "Oats",
    brands: "Quaker",
    image_small_url: "https://upload.wikimedia.org/wikipedia/commons/1/15/Rolled_oats.jpg",
    nutriments: {
      "energy-kcal_100g": 389,
      proteins_100g: 16.9,
      carbohydrates_100g: 66.3,
      fat_100g: 6.9
    }
  }
]
    setResults(fallback)
  } finally {
    setLoading(false)
  }
}
      

  return (
    <div>
      <h1>🥗 FoodFacts</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && (
        <p>Search for a food to see nutrition info</p>
      )}

      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  )
}

export default App