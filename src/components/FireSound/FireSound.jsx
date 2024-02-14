import React from 'react';
import audioFile from '../../assets/sounds/fireSong.mp3';
import './FireSound.css'; // Importa el archivo CSS para los estilos personalizados

class FireSound extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isPlaying: false
      };
      this.audioRef = React.createRef();
   }

   async playAudio() {
      try {
         await this.audioRef.current.play();
         this.setState({ isPlaying: true });
      } catch (error) {
         // Manejar errores de reproducción
         console.error('Error reproduciendo audio:', error);
      }
   }

   componentDidMount() {
      // Inicia la reproducción del audio cuando el componente se monta
      this.playAudio();
   }

   togglePlayPause = () => {
      const audio = this.audioRef.current;
      if (!this.state.isPlaying) {
         audio.play().then(() => {
            this.setState({ isPlaying: true });
         }).catch(error => {
            // Manejar errores de reproducción
            console.error('Error reproduciendo audio:', error);
         });
      } else {
         audio.pause();
         this.setState({ isPlaying: false });
      }
   }

   render() {
      return (
         <div className="audio-player">
            <audio ref={this.audioRef} loop>
               <source src={audioFile} type="audio/mp3" />
               Tu navegador no soporta la etiqueta de audio.
            </audio>
            <button className={`play-pause-button ${this.state.isPlaying ? 'playing' : ''}`} onClick={this.togglePlayPause}></button>
         </div>
      );
   }
}

export default FireSound;
