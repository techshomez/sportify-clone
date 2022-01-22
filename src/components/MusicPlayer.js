import React, { useState } from 'react';
import '../Styles/MusicPlayer.css';
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepBackward, FaStepForward } from 'react-icons/fa';
import {BsDownload} from 'react-icons/bs';

function MusicPlayer({ song, imgSrc }) {

    const [isLove, setLoved] = useState(false);
    const [isPlaying, setPlaying] = useState(false);

    const changedLoved = () => {
        setLoved(!isLove);
    };

    const changePlayPause = () => {
        setPlaying(!isPlaying);
    };

  return (
    <div className='MusicPlayer'>
        <div className="songImage">
            <img src={imgSrc} alt="" />
        </div>
        <div className="songAttributes">
            <audio src={song} preload='metadata' />
            <div className="top">
                <div className="left">
                <div className="loved" onClick={changedLoved}>
                {
                    isLove ? 
                    (
                        <i><FaHeart /></i>
                    ) : (
                        <i><FaRegHeart /></i>
                    )
                }
                </div>
                <div className="download">
                    <i><BsDownload /></i>
                </div>
                </div>
                <div className="middle">
                    <div className="back">
                        <i>
                            <FaStepBackward />
                        </i>
                        <i>
                            <FaBackward />
                        </i>
                    </div>
                    <div className="playPause" onClick={changePlayPause}>
                    {
                    isPlaying ? 
                    (
                        <i>
                            <FaPause />
                        </i>
                    ) : (
                        <i>
                            <FaPlay />
                        </i>
                    )
                    }
                    </div>
                    <div className="forward">
                        <i>
                            <FaForward />
                        </i>
                        <i>
                            <FaStepForward />
                        </i>
                    </div>
                </div>
                <div className="right">
                    <i><FaShareAlt /></i>
                </div>
            </div>
            <div className="bottom">
                <div className="currentnTime">00:00</div>
                <input type="range" className='progressBar'/>
                <div className="duration">00:00</div>
            </div>
        </div>
    </div>
    );
}

export {MusicPlayer};
