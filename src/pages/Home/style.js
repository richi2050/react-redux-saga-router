import { makeStyles } from '@material-ui/styles'

const centeredStyleObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
} 

export default makeStyles({
  container: {
    height: '100vh',
    flexDirection: 'column',
    ...centeredStyleObj
    },
  cardContainer: {
    flexDirection: 'column',
    height:200,
    width:400,
    padding:'2rem',
    ...centeredStyleObj
  },
  title: {
    fontSize:'4rem'
  },
  titleGridContainer: {
    ...centeredStyleObj
  },
  textFliedSearch: {
    width:'90%'
  },
  searchButton: {
    marginLeft:'.5rem'
  },
  buttonsContainer: {
    marginTop:'.5rem'
  },
  movieIcon: {
    fontSize: '4rem'
  }
});

