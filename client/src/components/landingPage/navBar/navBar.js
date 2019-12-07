import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                 <Grid container spacing={3}>
                     <Grid item xs={6}>
                        <AppBar position="static">
                            <Toolbar>
                            
                            </Toolbar>
                         </AppBar>
                     </Grid>
                     <Grid item xs={6}>
                        <svg viewBox="-90 0 950 200" >
                            <g filter="url(#filter0_d)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M243.541 0C236.263 8.20493 220.29 20.1014 191.169 37.1448C62.1694 112.645 127.669 129.645 191.169 87.1447C220.124 67.7656 264.673 80.1978 310.594 93.0132C365.382 108.303 422.124 124.138 456.669 87.1447C520.169 19.1447 800.169 9.64481 734.67 87.1447C669.17 164.645 860.17 87.1447 860.17 87.1447V0H243.541Z" fill="#80E884"/>
                            </g>
                            <g filter="url(#filter1_d)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M113.335 0C105.772 4.2674 96.9517 8.96872 86.7295 14.1448C-62.3765 89.6448 13.3324 106.645 86.7295 64.1447C120.197 44.7656 171.689 57.1979 224.768 70.0132C288.095 85.303 353.681 101.138 393.61 64.1447C467.007 -3.85529 790.648 -13.3552 714.94 64.1447C639.231 141.645 860 64.1447 860 64.1447V0H113.335Z" fill="#9DEFA1"/>
                            </g>
                            <defs>
                            <filter id="filter0_d" x="113" y="0" width="751.17" height="129.589" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            <filter id="filter1_d" x="0" y="0" width="861" height="103.589" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="0.5"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                     </Grid>
                </Grid>
</React.Fragment>
        ); 
    }
}

export default NavBar;