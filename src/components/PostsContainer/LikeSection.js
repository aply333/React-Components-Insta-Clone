import React,{useState} from 'react';

const LikeSection = props => {
  console.log('likes', props)
  let likes = props.likesData.likes
  console.log('likeCount',likes)

  const [likeCount, counting] = useState(likes)
  
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper" 
        onClick={
          ()=>counting(likeCount+1)}>
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
  {likeCount} likes</p>
</div>
  )
};

export default LikeSection;
