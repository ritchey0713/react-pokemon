import React, {Component} from 'react'

class PokemonCard extends Component {
  render(){
    const { pokemon } = this.props
    return(

      <div>
        {pokemon}
      </div>
    )
  }
}

export default PokemonCard
