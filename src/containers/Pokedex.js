import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAllPokemon, getData } from '../actions/pokemon.js'

class Pokedex extends Component {

  componentDidMount(){
    this.props.fetchAllPokemon()

  }

  render(){
    const allPokemon = this.props.pokemon
    console.log(allPokemon)
//this.props.getData(this.props.pokemon.url)
      //console.log(this.props.pokemon)
        {allPokemon.map(pokemon => this.props.getData(pokemon))}
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
