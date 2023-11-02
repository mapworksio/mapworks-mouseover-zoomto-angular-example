import type { SigninPopupArgs, SignoutRedirectArgs, User, UserManager, UserManagerSettings, UserProfile } from 'oidc-client-ts';
import { Observable } from 'rxjs';
import type * as _ from 'underscore';
export type Json = string | number | boolean | null | Json[] | {
    [key: string]: Json;
};
/**
 * A Mapworks map consists of a heirarchy of layers, groups or references to other maps;
 * each of these is a node derived from this class.
 *
 * @see https://da/~juneidy/api/#!/api/Studio.core.entity.BaseTreeNodeEntity
 */
export declare class MapworksBaseTreeNodeEntity {
    findByReferenceId(refId: string): MapworksTreeEntity;
}
/**
 * A Mapworks map consists of a heirarchy of layers, groups or references to other maps;
 * each of these is a node derived from this class.
 *
 * @note Layers should be redrawn after making changes that alter how they are
 *       displayed on the map, e.g. changing visibility or styles.
 *
 * @see https://da/~juneidy/api/#!/api/Studio.core.entity.TreeEntity
 */
export declare class MapworksTreeEntity extends MapworksBaseTreeNodeEntity {
    getReferenceId(): string;
    getTitle(): string;
    /**
     * Redraws this Layer Selector node and its children.
     *
     * Layers should be redrawn after making changes that alter how they are
     * displayed on the map, e.g. changing visibility or styles.
     */
    redraw(): MapworksTreeEntity;
    /**
     * Determines if a Layer Selector node is visible.
     *
     * @param checkParent if true, the node's parents also have to be visible
     *                    for this node to be considered visible. Defaults to `true`.
     * @returns `true` if visible, `false` if not
     */
    isVisible(checkParent?: boolean): boolean;
    /**
     * Sets the visibility of a Layer Selector node.
     *
     * For a layer to be visible on the map, all of its parent nodes must also be visible.
     * @param visible true to set the node to visible
     */
    setVisible(visible: boolean): MapworksTreeEntity;
}
/**
 * Mapworks layer and context within the Studio Layer Selector.
 *
 * @see https://da/~juneidy/api/#!/api/Studio.core.entity.TreeEntity
 */
export declare class MapworksTreeLayerEntity extends MapworksTreeEntity {
    getFeatureSetId(): string;
    identify(): MapworksTreeLayerEntity;
}
/**
 * A TreeLayerEntity that contains vector features. Vector layers may be of type ADHOC, FILTERED or VECTOR.
 */
export declare class MapworksTreeVectorLayerEntity extends MapworksTreeLayerEntity {
    constructor(options: any, mapOptions: {
        map: MapworksMap;
    });
}
/**
 *
 * @see https://da/~juneidy/api/#!/api/Studio.core.entity.FeatureEntity
 */
export declare class MapworksFeatureEntity {
    attributes: {
        displayLayerName: string;
        fields: {
            [humanReadableName: string]: string | number;
        };
        rawFields: {
            [fieldName: string]: string | number;
        };
        id: string;
        layer: MapworksTreeLayerEntity;
        type: MapworksFeatureType;
        filled: boolean;
    };
    getDisplayName(): string;
}
export declare class MapworksVectorPointEntity extends MapworksFeatureEntity {
}
export declare class MapworksVectorPolygonEntity extends MapworksFeatureEntity {
}
/**
 * An event that is generated when a user performs interactively using the mouse on the the map or features on the map.
 */
export declare class MapworksFeatureEvent {
    /**
     * The vector feature being 'browsed'; may be null if no feature involved.
     */
    getFeature(): MapworksFeatureEntity | null;
    isAnyFeature(): boolean;
    getX(): number;
    getY(): number;
    getType(): MapworksMapEventType;
}
/**
 * Class provided to display template (mouseover, mouse click etc) functions.
 *
 * @see MapworksFeatureDisplayTemplates
 */
export declare class MapworksFeatureDisplayContext {
    className: string;
    displayLayerName: string;
    displayName: string;
    model: MapworksFeatureEntity;
    fields: {
        [humanReadableName: string]: string | number;
    };
    sortedFields: {
        title: string;
        value: string | number;
        isKey: boolean;
    }[];
    id: string;
    layer: MapworksTreeLayerEntity;
    x: number;
    y: number;
    map: MapworksMap;
    type: MapworksFeatureEventType;
    template: (context: MapworksFeatureDisplayContext) => string;
    /**
     * Whether this display event should be rendered as a default or child view.
     */
    mode: MapworksTooltipViewMode;
    /**
     * The collapse status in child view mode.
     */
    collapse: boolean;
}
/**
 * Collection of feature display templates; those set depend on the
 * event type (mouseover, mouse click, or drill-down/ all visible features).
 */
export declare class MapworksFeatureDisplayTemplates {
    /**
     * The mouse over tooltip template
     * or undefined if this is not the mouseover event.
     */
    mouseoverTpl?: (context: MapworksFeatureDisplayContext) => string;
    /**
     * The highlighted click tooltip template
     * or undefined if this is not the highlighted click event.
     */
    clickTpl?: (context: MapworksFeatureDisplayContext) => string;
    /**
     * The custom tooltip template
     * or undefined if this is not the custom popover event.
     */
    customPopoverTpl?: (context: MapworksFeatureDisplayContext) => string;
    /**
     * The layout template for the all visible feature click event;
     * undefined if this is not the all visible feature click event.
     */
    layout?: (context: MapworksFeatureDisplayContext) => string;
    /**
     * The title template for the all visible feature click event;
     * undefined if this is not the all visible feature click event.
     */
    title?: (context: MapworksFeatureDisplayContext) => string;
    /**
     * The layer group template for the all visible feature click event;
     * undefined if this is not the all visible feature click event.
     */
    layerGroup?: (context: MapworksFeatureDisplayContext) => string;
    /**
     * The feature template for the all visible feature click event;
     * undefined if this is not the all visible feature click event.
     */
    feature?: (context: MapworksFeatureDisplayContext) => string;
}
export declare enum MapworksFeatureType {
    UNKNOWN = 0,
    POINT = 1,
    POLYLINE = 2,
    TEXT = 3,
    CIRCLE = 4,
    POLYGON = 5,
    RECTANGLE = 6,
    MULTI = 7,
    IMAGE = 8,
    ANNOTATION = 16
}
export declare enum MapworksFeatureEventType {
    /**
     * An event triggered by mouse over a feature.
     */
    MOUSEOVER = 0,
    /**
     * A mouse click event on the map or feature.
     */
    MOUSECLICK = 1,
    /**
     * A right click event on the map or feature.
     */
    MOUSECLICK_RIGHT = 2,
    /**
     * A 'mouse press' or 'touch-start' event.
     */
    MOUSEDOWN = 3,
    /**
     * A tooltip event when the mouse position is at a position over period of
     * time. This is used to display the tooltip for a feature.
     */
    TOOLTIP = 4
}
/**
 * The TooltipView render mode.
 */
export declare enum MapworksTooltipViewMode {
    /** Render tooltip view as stand alone view */
    VIEW = "view",
    /** Render tooltip view as part of composite view */
    CHILD_VIEW = "childView"
}
export type MapworksMapFeatureEventType = 'feature:mouseover' | 'feature:mouseclick' | 'feature:tooltip' | 'feature:longpress';
export type MapworksMapEventType = 'ready' | 'accessToken:change' | 'session:change' | 'before:render' | MapworksMapFeatureEventType;
export interface MapworksEventEmitter<TContext, T> {
    on(eventName: string, handler: (this: TContext, t: T, ...args: any[]) => any): void;
    off(eventName: string, handler: (this: TContext, t: T, ...args: any[]) => any): void;
}
export declare function fromEvent<T>(target: MapworksEventEmitter<any, T> | ArrayLike<MapworksEventEmitter<any, T>>, eventName: MapworksMapEventType): Observable<T>;
/**
 * An instance of a Mapworks map component.
 */
export declare class MapworksMap {
    /**
     * Return the Mapworks API Url.
     */
    getServerUrl(): string;
    /**
     * Return the current OAuth2 Access Token.
     */
    getAccessToken(): string;
    /**
     * Return the current OAuth2 Access Token type, usually `Bearer`.
     */
    getTokenType(): string;
    /**
     * Returns the authorization scheme type and access token,
     * which may used as the value of the HTTP Authorization header.
     */
    getAuthorization(): string;
    /**
     * Return the Mapworks API version.
     */
    getApiVersion(): string;
    login(args?: SigninPopupArgs): Promise<MapworksUser>;
    loginAnonymous(): Promise<MapworksUser>;
    logout(args?: SignoutRedirectArgs): Promise<void>;
    getUser(): Promise<MapworksUser>;
    isReady(): boolean;
    getControl(controlName: string): MapworksStudioControl;
    getTree(): MapworksTreeEntity;
    getCrs(): string;
    getViewCenter(): number[];
    retrieveLayersByReferenceIds(refIds: string[]): Promise<MapworksTreeLayerEntity[]>;
    layerSearch(input: MapworksLayerSearchInput): Promise<any>;
    animateTo(options: MapworksAnimateToOptions): void;
    on(eventType: 'ready', callback: () => void): MapworksMap;
    on(eventType: 'accessToken:change', callback: (tokenType: string, accessToken: string) => void): MapworksMap;
    on(eventType: 'session:change', callback: (user: User) => void): MapworksMap;
    on(eventType: MapworksMapFeatureEventType, callback: (event: MapworksFeatureEvent) => void): MapworksMap;
    off(eventType: MapworksMapFeatureEventType, callback: (event: MapworksFeatureEvent) => void): MapworksMap;
    [name: string]: any;
}
export interface MapworksStudioConfigOptions {
    mapworksPath: string;
    access?: MapworksAccess;
    map?: string;
    mapRef?: string;
    [name: string]: any;
    mapworksLoginProvider?: MapworksUserManagerSettings;
}
export declare enum MapworksAccess {
    /** Start with Anonymous map access and do not provide option to sign in */
    Anonymous = "anonymous-only",
    /** Start with Anonymous map access AND allow the option to sign in */
    AnonymousOrRegistered = "anonymous-registered",
    /** Require users to sign in with a registered account only */
    RegisteredOnly = "registered-only"
}
/**
 *
 * @see https://da/~juneidy/api/#!/api/Studio.core.control.BaseControl
 */
export declare class MapworksStudioControl {
    name: String;
    addTo(map: MapworksMap, options?: {
        index: number;
    }): MapworksStudioControl;
}
/**
 *
 * @see https://da/~juneidy/api/#!/api/Studio.core.control.tooltip.Tooltip
 */
export declare class MapworksStudioTooltipControl extends MapworksStudioControl {
    on(eventType: 'before:render', callback: (featureOrFeatures: MapworksFeatureEntity, templateObject: MapworksFeatureDisplayTemplates, rerenderCallback: (templateObject: MapworksFeatureDisplayTemplates) => void) => void): void;
}
/**
 * The input object to use for {@link Studio.core.Map#layerSearch Layer Search}.
 */
export interface MapworksLayerSearchInput {
    input: {
        /**
         * The result set size.
         * @defaultValue 10
         */
        size?: number;
        /**
         * The starting index (offset).
         * This is used for situations where paging of results is required.
         * @defaultValue 0
         */
        from?: number;
        /**
         * An array of vector layers to search.
         */
        layers: MapworksTreeVectorLayerEntity[];
        /**
         * @property {Studio.core.entity.query.Filter} filter XXX TODO
         * The filter to apply on the layer search.
         */
        filter?: {
            [n: string]: Json;
        };
        /**
         * The fields to include in the result.
         */
        include: string[];
        /**
         * @property {Studio.core.entity.query.Query} query XXX TODO
         * Query string to search.
         */
        query?: {
            [n: string]: Json;
        };
    }[];
}
/**
 * Input options for a map animation operation.
 */
export interface MapworksAnimateToOptions {
    /**
       * The X coordinate to animate to; provide either `(x,y)` or `extent`.
     */
    x?: number;
    /**
       * The Y coordinate to animate to; provide either `(x,y)` or `extent`.
     */
    y?: number;
    /**
       * The X coordinate to animate to; provide either `(x,y)` or `extent`.
     */
    extent?: any;
    targetScale?: number;
    /**
       * The multiplier applied to the target scale.
     * @defaultValue 1
     */
    targetScaleMultiplier?: number;
    animationStyle?: string;
    /**
     * The maximum duration of the animation in milliseconds,
     * noting that the animation can be shorter if the view
       * is closer to the destination scale or position.
     * @defaultValue 4000
     */
    duration?: number;
    callback?: () => void;
}
export interface MapworksUserManagerSettings extends UserManagerSettings {
    /**
     * Prefix used for keys in LocalStorage used to store OAuth2/OIDC authorisation state;
     * defaults to the OAuth2 Client ID.
     */
    storage_prefix?: string;
    /**
     * The user email representing the Mapworks Anonymous User (if enabled for the Mapworks Organisation);
     * this is usually `noreply@public-anonymous.mapworks.io`.
     */
    anonymousUser?: string;
}
/**
 * Mapworks user types.
 * @see https://krondor.amristar.com/bitbucket/projects/PPM/repos/mapworks-management-console/browse/src/app/api/models/system-user-type.ts#9
 * @see https://krondor.amristar.com/bitbucket/projects/PPM/repos/org-directory/browse/src/entity/types.ts
 */
export declare enum MapworksUserType {
    Org = "org_user",
    Standalone = "standalone_user"
}
/**
 * Mapworks user roles.
 * @see https://krondor.amristar.com/bitbucket/projects/PPM/repos/mapworks-management-console/browse/src/app/api/models/standalone-user-role.ts
 * @see https://krondor.amristar.com/bitbucket/projects/PPM/repos/mapworks-management-console/browse/src/app/api/models/org-user-role.ts
 * @see https://krondor.amristar.com/bitbucket/projects/PPM/repos/org-directory/browse/src/entity/types.ts
 */
export declare enum MapworksUserRole {
    AllUsers = "all_users",
    Anonymous = "anonymous",
    AppUser = "app_user",
    FreeUser = "free_user",
    MapDesigner = "map_designer",
    MapDesignerIndividual = "map_designer_individual",
    OrgAdmin = "org_admin",
    OrgSubscriber = "org_subscriber",
    SystemAdmin = "system_admin"
}
export interface MapworksUserProfile extends UserProfile {
    'mapworks:id'?: string;
    'mapworks:username'?: string;
    'mapworks:attributes'?: {
        [name: string]: any;
    };
    'mapworks:role'?: MapworksUserRole;
    'mapworks:type'?: MapworksUserType;
    'mapworks:organisation'?: string;
    'mapworks:organisation_name'?: string;
    'mapworks:defaultAcl'?: {
        find?: Array<string>;
        read?: Array<string>;
        write?: Array<string>;
        remove?: Array<string>;
    };
}
export interface MapworksUser extends User {
    profile: MapworksUserProfile;
}
export declare class MapworksUserManager extends UserManager {
    constructor(settings?: MapworksUserManagerSettings);
    /**
     * Custom Mapworks method to initialise user auth session by checking if there is an
     * existing session in LocalStorage and performing a session renewal if required.
     */
    init(): Promise<MapworksUser | null>;
    getUserInfo(user: User): Promise<MapworksUserProfile>;
    signinPopup(args?: SigninPopupArgs): Promise<MapworksUser>;
    getProfile(user: User): Promise<MapworksUser>;
}
/**
 * Once Studio is loaded, the global reference `Studio` of type
 * MapworksStudio is defined.
 */
export declare class MapworksStudio {
    /**
     * Initialise a Mapworks Map component within the specific HTML component.
     *
     * @param elementOrSelector a HTML element selection (string e.g. `#map`) or HTMLElement
     * @param config the Studio Map configuration
     * @param additionalConfig additional web interface configuration
     */
    init(elementOrSelector: string | HTMLElement, config: MapworksStudioConfigOptions, additionalConfig?: {
        [n: string]: any;
    }): MapworksMap;
    OidcClient: {
        MapworksUserManager: typeof MapworksUserManager;
        signinCallback(): void;
    };
    core: {
        entity: {
            TreeVectorLayerEntity: typeof MapworksTreeVectorLayerEntity;
        };
    };
    _: typeof _;
    $: any;
}
/**
 * Once Studio is loaded, the global reference `Studio` of type
 * MapworksStudio is defined.
 */
declare global {
    interface Window {
        Studio: MapworksStudio;
    }
}
//# sourceMappingURL=mapworks-types.d.ts.map