import React from 'react';
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs';
import { FaDesktop } from 'react-icons/fa';
import Track from '../img/track.png'

function TrackList() {
    return <div className='trackList'>
        <div className="top">
            <img src={Track} alt="" />
            <p className='trackName'>
                Sample Name <span className='trackSpan'>Artist</span>
            </p>
        </div>
        <div className="bottom">
             <i className=''>
                 <BsFillVolumeUpFill />
             </i>
             <input type="range"/>
             <i className=''>
                 <BsMusicNoteList />
             </i>
             <i className=''>
                 <FaDesktop />
            </i>
        </div>
    </div>
}

export {TrackList};
