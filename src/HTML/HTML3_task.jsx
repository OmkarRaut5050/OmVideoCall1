import Video1 from './Videos/police_-_111961 (720p).mp4'

const Html = () =>{
    return(
        <div>
            <center>
                <nav>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Gallary</a>
                    <a href="">Contact</a>
                </nav>
            </center>

            <header>
                <center>
                    <h1>Home</h1>
                    <img src="https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_640.jpg" alt="" height={'500px'} width={'70%'}></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa vel recusandae reprehenderit quisquam porro quibusdam, exercitationem, doloremque veritatis laborum atque quia, officia sunt praesentium totam. Repudiandae voluptate reprehenderit enim quae similique rem eaque non, labore eligendi, modi amet quidem dolor itaque nostrum laborum necessitatibus laboriosam fugiat, aliquid eveniet earum. Nihil qui consectetur pariatur doloribus expedita temporibus, facere quod at omnis repellat, culpa eum corrupti nemo! Inventore magnam repellat numquam aut ut possimus corporis dolorum reprehenderit molestias, minima hic ex! Voluptatum accusantium excepturi dolore veniam natus nemo quos perspiciatis quibusdam molestias. Excepturi molestias soluta reiciendis adipisci cum cupiditate, pariatur quod!</p>
                </center>
            </header>

            <center>
                <h1>About</h1>
                <video src={Video1} width={'70%'} height={'500px'} autoplay ></video>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum modi labore animi velit, sint necessitatibus blanditiis expedita, nesciunt a culpa fugiat. Minus nobis earum est. Quisquam beatae consequatur enim incidunt veritatis! Adipisci tempora error voluptatem, deleniti ullam alias officia molestiae corrupti, culpa ipsum ex voluptates harum commodi impedit voluptatibus enim vitae aut, doloribus sunt pariatur! Delectus ipsam id blanditiis fugiat voluptas sint enim quas quo rem, atque, fugit, minus eos repellendus cum hic odit recusandae. Magnam repudiandae ipsum quisquam dignissimos sint quis laboriosam repellendus, fuga recusandae fugit porro doloribus. Commodi delectus beatae similique suscipit et ipsa aliquam voluptate unde!</p>
            </center>

            <center>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/7wV7C3E2WSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>

            <center>
                <h1 id="gallary">Gallary</h1>
                <img src="https://cdn.pixabay.com/photo/2018/11/14/21/29/machine-3816135_640.jpg" height={'300px'} width={'49%'} alt=""></img>
                <img src="https://cdn.pixabay.com/photo/2021/04/10/22/30/bmw-6168270_640.jpg" height={'300px'} width={'49%'} alt=""></img>
                <img src="https://cdn.pixabay.com/photo/2021/05/23/19/34/bmw-6277131_640.jpg" height={'300px'} width={'49%'} alt=""></img>
                <img src="https://cdn.pixabay.com/photo/2019/05/24/03/39/bmw-4225460_1280.jpg" height={'300px'} width={'49%'} alt=""></img>
            </center>

            <center>
            <h1>Contact</h1>
                <footer>
                    <table border={1} width={'100%'} rules={'none'} cellSpacing={'20px'} cellPadding={'20px'}>
                        <tr>
                            <td><b>Home</b></td>
                            <td><b>About</b></td>
                            <td><b>Galary</b></td>
                            <td><b>Contact</b></td>
                            <td><b>Service</b></td>
                            <td><b>Help</b></td>
                            <td><b>Location</b></td>
                            <td><b>Rating⭐</b></td>
                        </tr>

                        <tr>
                            <td>Home</td>
                            <td>About</td>
                            <td>Gallary</td>
                            <td>kkkkkk</td>
                            <td>Service</td>
                            <td>Call</td>
                            <td>Pune</td>
                            <td>8.4</td>
                        </tr>

                        <tr>
                            <td>Home</td>
                            <td>About</td>
                            <td>Gallary</td>
                            <td colspan="2" ><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2005061724385!2d73.8737715!3d18.5198392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c05b2cea7549%3A0x9889d157914f63e9!2sBMW%20Pune%20-%20Bavaria%20Motors!5e0!3m2!1sen!2sin!4v1689744318296!5m2!1sen!2sin" width={'100%'} height={'100%'} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
                            <td>Call</td>
                            <td>mumbai</td>
                            <td>8.7</td>
                        </tr>

                        <tr>
                            <td>Home</td>
                            <td>About</td>
                            <td>Gallary</td>
                            <td>kkkkk</td>
                            <td>Service</td>
                            <td><a href="tel:+9405862491">Call</a></td>
                            <td>bangaluru</td>
                            <td>8.3</td>
                        </tr>
                    </table>
                </footer>
            </center>

        </div>
    )
}

export default Html