import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import './Rating.css'

const Rating = (props) => {
    const scores = props.scores
    let scoresSum = 0
    if(scores.length > 0){
        scores.map(score => scoresSum += score.score )
    } 
    
    return (
        <>
            {
                scores.length === 0 ?
                    <Rate
                        defaultValue={0}
                        allowHalf
                        allowClear={false}
                        disabled={true}
                    /> :
                    <Rate
                        defaultValue={scoresSum/scores.length}
                        allowHalf
                        allowClear={false}
                        disabled={true}
                    />

            }
        </>

    )
}

export default Rating;

