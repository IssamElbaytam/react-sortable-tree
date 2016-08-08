import React from 'react';
import ReactDOM from 'react-dom';
import SortableTree from '../../index';
import styles from './stylesheets/app.scss';

const App = React.createClass({
    getInitialState() {
        return {};
    },
    render() {
        const projectName = 'React Sortable Tree';
        const authorName = 'Chris Fritz';
        const authorUrl = 'https://github.com/fritz-c';
        const githubUrl = 'https://github.com/fritz-c/react-sortable-tree';

        const treeData = [
            {
                key: 'b12314', // string or number. Every key in the tree needs to be unique
                value: { // Custom value. Can be anything - object, array, string, etc.
                    id: 'b12314',
                    title: 'Joe',
                    subtitle: 'Pancakes',
                },
                expanded: true,
                children: [
                    {
                        value: {
                            id: 1,
                            title: 'Really Long Name Nicholas Who Always Got' +
                                ' Picked on in School For His Really Long Name',
                            subtitle: 'Really good icebreaker, though',
                        },
                        children: [], // null or undefined also ok
                    },
                    {
                        value: 2,
                    },
                    {
                        key: 2412,
                        value: 2,
                        children: (resolve, _reject) => {
                            setTimeout(() => {
                                resolve([
                                    {
                                        key: 1215,
                                        value: 5,
                                    },
                                    {
                                        key: 2125,
                                        value: 215,
                                    },
                                ]);
                            }, 2000);
                        },
                    },
                ],
            },
            {
                key: 'b12315',
                value: {
                    id: 'b12315',
                    title: 'Frank',
                },
            },
            {
                key: 'b12316',
                value: {
                    id: 'b12316',
                    title: 'Beast Man',
                    subtitle: 'Pancakes',
                },
            },
            {
                key: 'b12336',
                value: {
                    id: 'b12336',
                    title: 'Tracy Page',
                    subtitle: 'Waffles',
                },
            },
        ];

        return (
            <div>
                <section className={styles['page-header']}>
                    <h1 className={styles['project-name']}>{projectName}</h1>

                    <h2 className={styles['project-tagline']}>
                        Drag-and-drop sortable representation of hierarchical data
                    </h2>
                </section>

                <section className={styles['main-content']}>
                    <span style={{ color: 'firebrick' }}>
                        Note: This is a work in progress; most of the features are not yet implemented.
                    </span>
                    <h3>Demo</h3>

                    <SortableTree
                        treeData={treeData}
                        generateNodeProps={({
                            nodeData:           _nodeData,
                            parentPath:         _parentPath,
                            lowerSiblingCounts: _lowerSiblingCounts,
                            listIndex:          _listIndex,
                        }) => ({
                            buttons: [
                                <button>＋</button>,
                                <button>ℹ</button>,
                            ],
                        })}
                    />

                    <h3>Features</h3>
                    <ul>
                        <li>Works right out of the box, but is highly customizable</li>
                        <li>No external CSS</li>
                    </ul>

                    <a href={githubUrl}>Documentation on Github</a>

                    <footer className={styles['site-footer']}>
                        <span className={styles['site-footer-owner']}>
                            <a href={githubUrl}>{projectName}</a> is maintained by <a href={authorUrl}>{authorName}</a>.
                        </span>

                        <span className={styles['site-footer-credits']}>
                            This page was generated by <a href="https://pages.github.com">GitHub Pages</a> using the <a href="https://github.com/jasonlong/cayman-theme">Cayman theme</a> by <a href="https://twitter.com/jasonlong">Jason Long</a>.
                        </span>
                    </footer>
                </section>

                <a href={githubUrl}>
                    <img
                        style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
                        src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
                        alt="Fork me on GitHub"
                        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
                    />
                </a>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));