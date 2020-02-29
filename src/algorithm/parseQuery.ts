/**
 * 在做虾皮的笔试题碰到了差不多的问题
 * @param query url queryString
 */
export default function parseQuery(query: string): Record<string, string> {
    const result: Record<string, string> = {};
    return query.split('&').reduce((pre, current) => {
        const [k, v] = current.split('=');
        pre[k] = v;
        return pre;
    }, result);
}
