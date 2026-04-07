function FoodCard({ product }) {
  const { product_name, brands, nutriments, image_small_url } = product

  return (
    <div>
      <img
  src={
    image_small_url
      ? image_small_url
      : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
  }
  alt={product_name}
  width="120"
/>

      <h2>{product_name || "Unknown Product"}</h2>

      <p>{brands || "No Brand"}</p>

      <p>Calories: {nutriments?.["energy-kcal_100g"] || 0}</p>
      <p>Protein: {nutriments?.proteins_100g || 0}</p>
      <p>Carbs: {nutriments?.carbohydrates_100g || 0}</p>
      <p>Fat: {nutriments?.fat_100g || 0}</p>
    </div>
  )
}

export default FoodCard