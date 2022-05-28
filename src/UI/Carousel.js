import { Carousel } from 'antd';
const contentStyle = {
    color: '#fff',
    textAlign: 'center',
    background: 'skyblue',
};

const App = (props) => {
    const { banner } = props
    return (<Carousel effect="fade" autoplay>
        {banner.map((item) => {
            return (<div key={item} >
                <h3 style={contentStyle}><img src={item.imageUrl} /></h3>
            </div>)
        })}
    </Carousel>)
};

export default App;