import React from 'react'
import Currency from '../images/image-currency.jpg'
import Restaurant from '../images/image-restaurant.jpg'
import Plane from '../images/image-plane.jpg'
import Confetti from '../images/image-confetti.jpg'
import CardArticles from './CardArticles'

const Article = () => (
    <section className="article">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Latest Article</h2>
                </div>
            </div>

            <div className="row mt-5">
                <CardArticles
                    image={Currency}
                    text={"Claire Robinson"}
                    title={"Receive money in any currency with no fees"}
                    desc={"The world is getting smaller and we're becoming more mobile. So why should you forced to only receive money in a single ..."}
                />

                <CardArticles
                    image={Restaurant}
                    text={"Wilson Hutton"}
                    title={"Treat yourself without worrying about money"}
                    desc={"Our simple budgeting feature allows you to separate out your spending and set realistic limits each money. That means your ..."}
                />

                <CardArticles
                    image={Plane}
                    text={"Wilson Hutton"}
                    title={"Take youe Easybank card wherever you go"}
                    desc={"We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."}
                />

                <CardArticles
                    image={Confetti}
                    text={"Claire Robinson"}
                    title={"Our invite-only Beta accounts are now live!"}
                    desc={"After a lot of hard work by the whole team, we're excited to lunch our closed beta. It's easy to request an invite through the site ..."}
                />
            </div>
        </div>
    </section>
)

export default Article