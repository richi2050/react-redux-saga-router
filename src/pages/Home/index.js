import React, {useState} from 'react';
import { Container, Typography,Card, Grid, TextField, Button } from '@material-ui/core'
import { MovieIcon } from '../../icons/index'
import styles from './style'

export default () => {
	const [searchText, setSearchText] = useState('');
	const classes = styles();
	const handleSearchTextChange = event => {
		setSearchText(event.target.value);
		console.log(searchText);
	}
	const handleCleanTextClick =	event => {
		console.log("handleCleanTextClick");
	}
	const handleSearchTextClick =	event => {
		console.log("handleSearchTextClick");
	}
	return(
	<Container className={classes.container}>
		<Card className={classes.cardContainer}>
			<Grid container className={classes.titleGridContainer}>
				<Grid>
					<Typography className={classes.title}>Bienevnido !</Typography>
				</Grid>
				<Grid>
					<MovieIcon className={classes.movieIcon}></MovieIcon>
				</Grid>
			</Grid>
			<TextField
			value={searchText}
			placeholder="Buscar ..."
			className={classes.textFieldSearch}
			onChange={handleSearchTextChange}/>
			<Grid className={classes.buttonsContainer}>
				<Button variant="contained" onClick={ handleCleanTextClick}>Limpiar</Button>
				<Button variant="contained" color="primary" className={classes.searchButton} size="large" onClick={handleSearchTextClick}>Buscar</Button>
			</Grid>
		</Card>
	</Container>
	) 
}