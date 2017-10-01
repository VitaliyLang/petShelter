import React from 'react'
import { Link } from 'react-router';

class Category extends React.Component {
    constructor (props) {
        super(props)
        this.state = { width:$(window).width() };
        this.key;
        this.updateWidth = this.updateWidth.bind(this);
      }
    
        updateWidth(){
            this.setState({width: $(window).width()});
            if(this.state.width >0 && this.state.width < 640){
                this.key = 's'
            }else if(this.state.width >= 640 && this.state.width < 720){
                this.key = 'm'
            }else if(this.state.width >= 720 && this.state.width < 1080){
                this.key = 'xl'
            }else if(this.state.width >= 1080){
                this.key = 'l'
            }
        }
    
        componentWillMount() {
            this.updateWidth();
        }
    
        componentDidMount() {
            window.addEventListener("resize", this.updateWidth);
        }
    
        componentWillUnmount() {
            window.removeEventListener("resize", this.updateWidth);
        }
    
        categorClick(e) {
            e.preventDefault();
            let link = '/animals/'+e.target.id, onlyKey = true, annArr = [];
            let {onGetAnimals} = this.props;
            onGetAnimals(link);
        }

    render(){
        let data = this.props.category,
            categorClick = this.categorClick.bind(this);
            console.log(this.key);
        return(
            <div className='category'>
                <img src={data.url[this.key]} />
                <p className="legend" onClick={categorClick}>
                <Link to={'/categories/'+data.category.toLowerCase()} id={data.category.toLowerCase()}>
                    {data.category}
                </Link>
                </p>
            </div>        
        )
    }
}

export default Category