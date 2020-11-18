/**
 * 虚拟DOM，使用虚拟节点代替真实节点，所有的操作都发生在虚拟节点上，然后通过diff算法对比新旧两颗虚拟树，计算出更新真实DOM的最少操作，有框架代替用户执行这些操作
 */
// vnode 节点结构
export default class VNode {
    tag: String | void;
    data: VNodeData | void;
    children: ?Array<VNode>;
    text: string | void;
    elm: Node | void;
    ns: string | void;
    context: Component | void;
    key: string | number | void;
    componentOptions: VNodeComponentOptions | void;
    componentInstance: Component | void;
    parent: VNode | void;
    raw: boolean; // contains raw HTML? (server only)
    isStatic: boolean; // hoisted static node
    isRootInsert: boolean; // necessary for enter transition check
    isComment: boolean; // empty comment placeholder?
    isCloned: boolean; // is a cloned node?
    isOnce: boolean; // is a v-once node?
    asyncFactory: Function | void; // async component factory function
    asyncMeta: Object | void;
    isAsyncPlaceholder: boolean;
    ssrContext: Object | void;
    fnContext: Component | void; // real context vm for functional nodes
    fnOptions: ?ComponentOptions; // for SSR caching
    fnScopeId: ?string; // functional scope id support

    constructor (
        tag?: string,
        data?: VNodeData,
        children?: ?Array<VNode>,
        text?: string,
        elm?: Node,
        context?: Component,
        componentOptions?: VNodeComponentOptions,
        asyncFactory?: Function
        ) {
            this.tag = tag
            this.data = data
            this.children = children
            this.text = text
            this.elm = elm
            this.ns = undefined
            this.context = context
            this.fnContext = undefined
            this.fnOptions = undefined
            this.fnScopeId = undefined
            this.key = data && data.key
            this.componentOptions = componentOptions
            this.componentInstance = undefined
            this.parent = undefined
            this.raw = false
            this.isStatic = false
            this.isRootInsert = true
            this.isComment = false
            this.isCloned = false
            this.isOnce = false
            this.asyncFactory = asyncFactory
            this.asyncMeta = undefined
            this.isAsyncPlaceholder = false
        }
    
    get child ():Component | void {
        return this.componentInstance;
    }
}