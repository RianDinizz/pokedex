function PokemonCard({ id, nome, tipo }) {
  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={nome}
      />

      <h2>
        #{String(id).padStart(3, "0")} — {nome}
      </h2>

      <p>Tipo: {tipo}</p>
    </div>
  )
}

export default PokemonCard