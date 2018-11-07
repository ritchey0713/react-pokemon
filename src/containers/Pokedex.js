import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAllPokemon, getData } from '../actions/pokemon.js'
import PokemonCard from '../components/PokemonCard.js'
class Pokedex extends Component {

  componentDidMount(){
    this.props.fetchAllPokemon()
  }

  render(){
    const allPokemon = this.props.pokemon.basicInfo
    console.log(allPokemon)
    allPokemon.map((pokemon) => {
      this.props.getData(pokemon)
      console.log('should have all deep data?',this.props.pokemon.data)
    })

    return(
      <div>
      hello there!

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    pokemon: state.pokemon
  })
}

export default connect( mapStateToProps, {
  fetchAllPokemon,
  getData
})(Pokedex)
