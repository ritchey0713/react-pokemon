import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAllPokemon, getData } from '../actions/pokemon.js'

class Pokedex extends Component {

  componentDidMount(){
    this.props.fetchAllPokemon()

  }

  render(){
    const pokemon = this.props.pokemon
    console.log(pokemon)
//this.props.getData(this.props.pokemon.url)
      //console.log(this.props.pokemon)
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
