import { invoke } from '@tauri-apps/api/tauri';
import { useState } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

export function Index() {
    const [greetMsg, setGreetMsg] = useState('');
    const [name, setName] = useState('');

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke('greet', { name }));
    }
    return (
        <div className={styles.page}>
            <div className="container">
                <h1>Welcome to Tauri!</h1>
                <div className="row">
                    <span className="logos">
                        <a
                            href="https://nextjs.org"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                width={144}
                                height={144}
                                src="/assets/next.svg"
                                className="logo next"
                                alt="Next logo"
                            />
                        </a>
                    </span>
                    <span className="logos">
                        <a
                            href="https://tauri.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                width={144}
                                height={144}
                                src="/assets/tauri.svg"
                                className="logo tauri"
                                alt="Tauri logo"
                            />
                        </a>
                    </span>
                    <span className="logos">
                        <a
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                width={144}
                                height={144}
                                src="/assets/react.svg"
                                className="logo react"
                                alt="React logo"
                            />
                        </a>
                    </span>
                </div>

                <p>Click on the Tauri, Next, and React logos to learn more.</p>

                <div className="row">
                    <div>
                        <input
                            id="greet-input"
                            onChange={(e) => setName(e.currentTarget.value)}
                            placeholder="Enter a name..."
                        />
                        <button type="button" onClick={() => greet()}>
                            Greet
                        </button>
                    </div>
                </div>

                <p>{greetMsg}</p>
            </div>
        </div>
    );
}

export default Index;
