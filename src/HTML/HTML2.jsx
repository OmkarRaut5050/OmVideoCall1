import Image1 from './Images/tree_moon.jpg'
import Audio1 from './Audios/aal-izz-well.mp3'
import Video1 from './Videos/Javascript in 1 shot in Hindi part 2.mp4'

const Html = () =>{
    return(
        <div className="Html">
            <h1>Welcome to HTML</h1>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" height={'500px'} width={'49%'}></img>
            <img src={Image1} alt="" height={'500px'} width={'49%'}></img>

            <h1>Anchor Tag</h1>
            <a href="www.flipkart.com" target={'_blank'}>Flipkart</a>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/t_jwAtCQ4-4?si=QdFAU57oiBfZkXPF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30344.399441065263!2d74.68839526176457!3d18.06924314782164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc39bc197ceb967%3A0x2aa1fb062847521e!2sPawarwadi%2C%20Maharashtra%20413104!5e0!3m2!1sen!2sin!4v1696922043022!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>

            <audio src={Audio1} controls autoPlay loop></audio>
            <video src={Video1} controls autoPlay loop></video>

            <h1>Tables</h1>

            <table border={1} cellSpacing={'20px'} cellPadding={'20px'}>
                <thead>
                    <tr>
                        <th>SR.no</th>
                        <th>Name</th>
                        <th>Sal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td colSpan={2}>A</td>
                    </tr>

                    <tr>
                        <td>02</td>
                        <td>B</td>
                        <td>20</td>
                    </tr>

                    <tr>
                        <td >03</td>
                        <td>C</td>
                        <td rowSpan={2}>30</td>
                    </tr>

                    <tr>
                        <td>04</td>
                        <td>D</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Kunal@gmail.com</td>
                    </tr>
                </tfoot>
            </table>
            
        </div>
    )
}

export default Html