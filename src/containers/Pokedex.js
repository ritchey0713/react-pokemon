import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAllPokemon } from '../actions/pokemon.js'
import PokemonCard from '../components/PokemonCard.js'
import { getData } from '../actions/pokemon.js'
class Pokedex extends Component {

  componentDidMount(){
    this.props.fetchAllPokemon()
  }

  render(){
    const allPokemon = this.props.pokemon
    // this.props.pokemon.map((pokemon) => {
    //   this.props.getData(pokemon)
    //})
    console.log(this.props)
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
