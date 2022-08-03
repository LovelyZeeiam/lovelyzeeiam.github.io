<template>
    <div class="structure">
        <img class="icon icon-anim" src="@/assets/icon.jpeg">
        <div class="trueView">
            <div class="user">
                <img class="icon float-left" src="@/assets/icon.jpeg">
                <div class="user-info float-right">
                    <h1 class="user-name">LovelyZeeiam</h1>
                    <p class="little-introduce">A Minecraft Player, coder and music producer</p>
                </div>
                <div class="float-clear"></div>
            </div>
            <div class="content">
                <p>Hi there~ My name is LovelyZeeiam, good at Java and Vue. I'm a college student now, majoring in Information Technology.</p>
                <div class="lang-show">
                    <div class="list flex-fill">
                        <h2>Languages</h2>
                        <ul class="langs">
                            <li v-for="obj in languages" :key="obj.name">
                                <div class="float-left lang-name">{{obj.name}}</div>
                                <div class="float-right lang-desc">{{obj.desc}}</div>
                            </li>
                        </ul>
                    </div>
                    <img :src="langStatUrl" class="lang-statistic" />
                </div>
                <div class="projects-show">
                    <div class="list">
                        <h2>Projects</h2>
                        <table class="projs">
                            <tr>
                                <th>Name</th>
                                <th>Language</th>
                                <th>Description</th>
                            </tr>
                            <tr v-for="obj in projects" :key="obj.name">
                                <td><a :href="obj.link">{{ obj.name }}</a></td>
                                <td>{{ obj.lang }}</td>
                                <td>{{ obj.desc }}</td>
                            </tr>
                        </table>    
                    </div>
                    <img :src="commitStatUrl" class="commit-statistic" />
                </div>
                <div class="socialShow">
                    <h2>Social</h2>
                    <div class="social-entry bilibili">
                        <a href="https://space.bilibili.com/157262276">
                            <span class="iconfont icon-bilibili-line" id="bilibili-icon"></span>
                            <span class="name">某不知名雪莉酱</span>
                        </a>
                    </div>
                    <div class="social-entry github">
                        <a href="https://github.com/LovelyZeeiam">
                            <span class="iconfont icon-github-fill"></span>
                            <span class="name">LovelyZeeiam</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndexViewStructure",
    data() {
        return {
            languages: [
                { name: "Java", desc: "good at it" },
                { name: "C++ & C", desc: "use at times" },
                { name: "Vue", desc: "seemingly good at it" }
            ],
            projects: [
                { name: "CraftGame", desc: "A voxel game like Minecraft", lang: "Java", link: "https://github.com/LovelyZeeiam/CraftGame" }
            ],
            langStatUrl: "https://github-readme-stats.vercel.app/api/top-langs/?username=LovelyZeeiam",
            commitStatUrl: "https://github-readme-stats.vercel.app/api?username=LovelyZeeiam&include_all_commits=true&count_private-true&custom_title=LovelyZeeiam'%20GitHub%20Stats&line_height=30&show_icons=true&hide_border=true"
        };
    }
}
</script>

<style lang="less" scoped>

@iconSize: 50px;

@boot-anim-duration: 1s;

.structure {
    color: black;
    background-color: rgba(248, 248, 248, 1);

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

}

.structure .icon {
    width: @iconSize;
    aspect-ratio: 1;

    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: calc(@iconSize * 0.4);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);

    position: relative;
}

.structure .icon-anim {
    position: absolute;

    animation-name: iconSplash;
    animation-duration: calc(@boot-anim-duration * 1.5);
    animation-fill-mode: both;

    @keyframes iconSplash {
        0% {
            transform: scale(1.5) rotate(-360deg);
            opacity: 0;
        }
        33.3% {
            transform: scale(2.0) rotate(0deg);
            opacity: 1;
        }
        66.6% {
            transform: scale(5.0);
        }
        100% {
            opacity: 0;
        }
    }

}

.structure .trueView {
    width: 500px;
    padding: 18px;

    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    border-radius: 6px;
    background-color: rgba(251, 251, 251, 1);

    animation-name: iconStarter;
    animation-duration: calc(@boot-anim-duration * 0.9);
    animation-delay: @boot-anim-duration;
    animation-fill-mode: both;

    @keyframes iconStarter {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

}

.structure .trueView .content {
    position: relative;
    animation-name: bootUserNameFloat;
    animation-duration: calc(@boot-anim-duration * 1.3);
    animation-delay: @boot-anim-duration;
    animation-fill-mode: both;
}

.structure .trueView .user {
    margin-bottom: 10px;
    display: inline-block;
}

.structure .trueView .user .user-info {
    margin-left: 1em;

    position: relative;
    animation-name: bootUserNameFloat;
    animation-duration: calc(@boot-anim-duration * 1.3);
    animation-delay: @boot-anim-duration;
    animation-fill-mode: both;

}

@keyframes bootUserNameFloat {
    0% {
        bottom: 0;
    }
    100% {
        bottom: 0.5em;
    }
}

.structure .trueView .user .user-info .user-name {
    font-size: calc(@iconSize * 0.6);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
    line-height: @iconSize;
    
}

.structure .trueView .user .user-info .little-introduce {
    color: rgba(0,0,0,0.6);
    font-size: 0.7em;
}

.structure .trueView .content p, li {
    color: rgba(0,0,0,0.8);
    font-size: 0.95em;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    line-height: 1.5em;
    
}

.structure .trueView .content h2 {
    font-size: 1.3em;
    margin: 10px 0;
    font-weight: bold;
    letter-spacing: 0.8px;
}

.structure .trueView .content li {
    margin-left: 1.5em;
}

.structure .trueView .content .lang-show {
    display: flex;

    @media screen and (max-width:500px) {
        display: block; 
    }

}

.structure .trueView .content .langs .lang-desc {
    color: rgba(0,0,0,0.6);
    font-size: 0.8em;
}

.structure .trueView .content .lang-statistic {
    width: 260px;
    padding-left: 1.2em;

    @media screen and (max-width:500px) {
        display: block;
        margin: 10px auto;
    }

}

.structure .trueView .content .projs {
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
}

.structure .trueView .content a {
    color: inherit;
    text-decoration: none;

    transform: scale(1.0);
    -webkit-transform: scale(1.0);

    transition-duration: 0.3s;

}

.structure .trueView .content a:hover {
    text-shadow: 0 0 5px rgba(0,0,0,0.4);
    color: rgba(0, 0, 5, 0.8);

}

.structure .trueView .content .projs {
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 0 5px rgba(0,0,0,0.05);
    border-radius: 3px;
}

.structure .trueView .content .projs tr,td,th {
    border: 0;
    padding: 0;
    margin: 0;
    border-spacing: 0;
}

.structure .trueView .content .projs td {
    color: rgba(0,0,0,0.7);
}

.structure .trueView .content .commit-statistic {
    display: block;
    width: 300px;
    margin: 0 auto;
}

.structure .trueView .content .socialShow .social-entry {
    display: inline;
    margin-right: 10px;
}

.structure .trueView .content .socialShow .social-entry .iconfont {
    color: rgba(0,0,0,0.9);
    font-size: 1.5em;
    margin-right: 0.2em;
}

.structure .trueView .content .socialShow .social-entry #bilibili-icon {
    position: relative;
    bottom: 0.05em;
}

.structure .trueView .content .socialShow .social-entry .name {
    color: rgba(0,0,0,0.75);
    font-size: 0.9em;
    
    position: relative;
    bottom: 0.25em;

}

</style>
