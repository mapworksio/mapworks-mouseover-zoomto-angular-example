"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapworksUserRole = exports.MapworksUserType = exports.MapworksAccess = exports.fromEvent = exports.MapworksTooltipViewMode = exports.MapworksFeatureEventType = exports.MapworksFeatureType = void 0;
const rxjs_1 = require("rxjs");
///
var MapworksFeatureType;
(function (MapworksFeatureType) {
    ///
    MapworksFeatureType[MapworksFeatureType["UNKNOWN"] = 0] = "UNKNOWN";
    /// Point
    MapworksFeatureType[MapworksFeatureType["POINT"] = 1] = "POINT";
    /// Polyline
    MapworksFeatureType[MapworksFeatureType["POLYLINE"] = 2] = "POLYLINE";
    /// Text
    MapworksFeatureType[MapworksFeatureType["TEXT"] = 3] = "TEXT";
    /// Circle
    MapworksFeatureType[MapworksFeatureType["CIRCLE"] = 4] = "CIRCLE";
    /// Polygon
    MapworksFeatureType[MapworksFeatureType["POLYGON"] = 5] = "POLYGON";
    /// Rectangle
    MapworksFeatureType[MapworksFeatureType["RECTANGLE"] = 6] = "RECTANGLE";
    /// Multi geometry feature
    MapworksFeatureType[MapworksFeatureType["MULTI"] = 7] = "MULTI";
    /// Image
    MapworksFeatureType[MapworksFeatureType["IMAGE"] = 8] = "IMAGE";
    /// Annotation
    MapworksFeatureType[MapworksFeatureType["ANNOTATION"] = 16] = "ANNOTATION";
})(MapworksFeatureType = exports.MapworksFeatureType || (exports.MapworksFeatureType = {}));
///
var MapworksFeatureEventType;
(function (MapworksFeatureEventType) {
    /**
     * An event triggered by mouse over a feature.
     */
    MapworksFeatureEventType[MapworksFeatureEventType["MOUSEOVER"] = 0] = "MOUSEOVER";
    /**
     * A mouse click event on the map or feature.
     */
    MapworksFeatureEventType[MapworksFeatureEventType["MOUSECLICK"] = 1] = "MOUSECLICK";
    /**
     * A right click event on the map or feature.
     */
    MapworksFeatureEventType[MapworksFeatureEventType["MOUSECLICK_RIGHT"] = 2] = "MOUSECLICK_RIGHT";
    /**
     * A 'mouse press' or 'touch-start' event.
     */
    MapworksFeatureEventType[MapworksFeatureEventType["MOUSEDOWN"] = 3] = "MOUSEDOWN";
    /**
     * A tooltip event when the mouse position is at a position over period of
     * time. This is used to display the tooltip for a feature.
     */
    MapworksFeatureEventType[MapworksFeatureEventType["TOOLTIP"] = 4] = "TOOLTIP";
})(MapworksFeatureEventType = exports.MapworksFeatureEventType || (exports.MapworksFeatureEventType = {}));
;
/**
 * The TooltipView render mode.
 */
var MapworksTooltipViewMode;
(function (MapworksTooltipViewMode) {
    /** Render tooltip view as stand alone view */
    MapworksTooltipViewMode["VIEW"] = "view";
    /** Render tooltip view as part of composite view */
    MapworksTooltipViewMode["CHILD_VIEW"] = "childView";
})(MapworksTooltipViewMode = exports.MapworksTooltipViewMode || (exports.MapworksTooltipViewMode = {}));
;
/// Helper for the RXJS `fromEvent()` function which recognised MapworksMap events
function fromEvent(target, eventName) {
    return (0, rxjs_1.fromEvent)(target, eventName);
}
exports.fromEvent = fromEvent;
var MapworksAccess;
(function (MapworksAccess) {
    /** Start with Anonymous map access and do not provide option to sign in */
    MapworksAccess["Anonymous"] = "anonymous-only";
    /** Start with Anonymous map access AND allow the option to sign in */
    MapworksAccess["AnonymousOrRegistered"] = "anonymous-registered";
    /** Require users to sign in with a registered account only */
    MapworksAccess["RegisteredOnly"] = "registered-only";
})(MapworksAccess = exports.MapworksAccess || (exports.MapworksAccess = {}));
/**
 * Mapworks user types.
 * @see https://krondor.amristar.com/bitbucket/projects/PPM/repos/mapworks-management-console/browse/src/app/api/models/system-user-type.ts#9
 * @see https://krondor.amristar.com/bitbucket/projects/PPM/repos/org-directory/browse/src/entity/types.ts
 */
var MapworksUserType;
(function (MapworksUserType) {
    MapworksUserType["Org"] = "org_user";
    MapworksUserType["Standalone"] = "standalone_user";
})(MapworksUserType = exports.MapworksUserType || (exports.MapworksUserType = {}));
/**
 * Mapworks user roles.
 * @see https://krondor.amristar.com/bitbucket/projects/PPM/repos/mapworks-management-console/browse/src/app/api/models/standalone-user-role.ts
 * @see https://krondor.amristar.com/bitbucket/projects/PPM/repos/mapworks-management-console/browse/src/app/api/models/org-user-role.ts
 * @see https://krondor.amristar.com/bitbucket/projects/PPM/repos/org-directory/browse/src/entity/types.ts
 */
var MapworksUserRole;
(function (MapworksUserRole) {
    MapworksUserRole["AllUsers"] = "all_users";
    MapworksUserRole["Anonymous"] = "anonymous";
    MapworksUserRole["AppUser"] = "app_user";
    MapworksUserRole["FreeUser"] = "free_user";
    MapworksUserRole["MapDesigner"] = "map_designer";
    MapworksUserRole["MapDesignerIndividual"] = "map_designer_individual";
    MapworksUserRole["OrgAdmin"] = "org_admin";
    MapworksUserRole["OrgSubscriber"] = "org_subscriber";
    MapworksUserRole["SystemAdmin"] = "system_admin";
})(MapworksUserRole = exports.MapworksUserRole || (exports.MapworksUserRole = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwd29ya3MtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWFwd29ya3MtdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUEsK0JBQThEO0FBc1I5RCxHQUFHO0FBQ0gsSUFBWSxtQkE4Qlg7QUE5QkQsV0FBWSxtQkFBbUI7SUFDN0IsR0FBRztJQUNKLG1FQUFXLENBQUE7SUFFWCxTQUFTO0lBQ1QsK0RBQVMsQ0FBQTtJQUVULFlBQVk7SUFDWixxRUFBWSxDQUFBO0lBRVosUUFBUTtJQUNSLDZEQUFRLENBQUE7SUFFUixVQUFVO0lBQ1YsaUVBQVUsQ0FBQTtJQUVWLFdBQVc7SUFDWCxtRUFBVyxDQUFBO0lBRVgsYUFBYTtJQUNiLHVFQUFhLENBQUE7SUFFYiwwQkFBMEI7SUFDMUIsK0RBQVMsQ0FBQTtJQUVULFNBQVM7SUFDVCwrREFBUyxDQUFBO0lBRVQsY0FBYztJQUNkLDBFQUFlLENBQUE7QUFDaEIsQ0FBQyxFQTlCVyxtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQThCOUI7QUFFRCxHQUFHO0FBQ0gsSUFBWSx3QkFzQlg7QUF0QkQsV0FBWSx3QkFBd0I7SUFDbkM7O09BRUc7SUFDSCxpRkFBYSxDQUFBO0lBQ2I7O09BRUc7SUFDSCxtRkFBYyxDQUFBO0lBQ2Q7O09BRUc7SUFDSCwrRkFBb0IsQ0FBQTtJQUNwQjs7T0FFRztJQUNILGlGQUFhLENBQUE7SUFDYjs7O09BR0c7SUFDSCw2RUFBVyxDQUFBO0FBQ1osQ0FBQyxFQXRCVyx3QkFBd0IsR0FBeEIsZ0NBQXdCLEtBQXhCLGdDQUF3QixRQXNCbkM7QUFBQSxDQUFDO0FBRUY7O0dBRUc7QUFDSCxJQUFZLHVCQUtYO0FBTEQsV0FBWSx1QkFBdUI7SUFDbEMsOENBQThDO0lBQzlDLHdDQUFhLENBQUE7SUFDYixvREFBb0Q7SUFDcEQsbURBQXdCLENBQUE7QUFDekIsQ0FBQyxFQUxXLHVCQUF1QixHQUF2QiwrQkFBdUIsS0FBdkIsK0JBQXVCLFFBS2xDO0FBQUEsQ0FBQztBQWFGLGtGQUFrRjtBQUNsRixTQUFnQixTQUFTLENBQ3ZCLE1BQThFLEVBQzlFLFNBQStCO0lBRS9CLE9BQU8sSUFBQSxnQkFBYSxFQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBTEQsOEJBS0M7QUFxR0QsSUFBWSxjQU9YO0FBUEQsV0FBWSxjQUFjO0lBQ3hCLDJFQUEyRTtJQUMzRSw4Q0FBNEIsQ0FBQTtJQUM1QixzRUFBc0U7SUFDdEUsZ0VBQThDLENBQUE7SUFDOUMsOERBQThEO0lBQzlELG9EQUFrQyxDQUFBO0FBQ3BDLENBQUMsRUFQVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQU96QjtBQXdJRDs7OztHQUlHO0FBQ0gsSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQzFCLG9DQUFnQixDQUFBO0lBQ2hCLGtEQUE4QixDQUFBO0FBQ2hDLENBQUMsRUFIVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUczQjtBQUVEOzs7OztHQUtHO0FBQ0gsSUFBWSxnQkFVWDtBQVZELFdBQVksZ0JBQWdCO0lBQzFCLDBDQUFzQixDQUFBO0lBQ3RCLDJDQUF1QixDQUFBO0lBQ3ZCLHdDQUFvQixDQUFBO0lBQ3BCLDBDQUFzQixDQUFBO0lBQ3RCLGdEQUE0QixDQUFBO0lBQzVCLHFFQUFpRCxDQUFBO0lBQ2pELDBDQUFzQixDQUFBO0lBQ3RCLG9EQUFnQyxDQUFBO0lBQ2hDLGdEQUE0QixDQUFBO0FBQzlCLENBQUMsRUFWVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQVUzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcbiAgU2lnbmluUG9wdXBBcmdzLFxuICBTaWdub3V0UmVkaXJlY3RBcmdzLFxuICBVc2VyLFxuICBVc2VyTWFuYWdlcixcbiAgVXNlck1hbmFnZXJTZXR0aW5ncyxcbiAgVXNlclByb2ZpbGUsXG59IGZyb20gJ29pZGMtY2xpZW50LXRzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCBhcyByeGpzRnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB0eXBlICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuLy8vIEEgYmFzaWMgSlNPTiBkZWZpbml0aW9uIHVzZSB3aGVuIGNvbmNyZXRlIHR5cGVzL2ludGVyZmFjZXMgZG9uJ3QgKHlldCkgZXhpc3RcbmV4cG9ydCB0eXBlIEpzb24gPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgbnVsbCB8IEpzb25bXSB8IHsgW2tleTogc3RyaW5nXTogSnNvbiB9O1xuXG4vKipcbiAqIEEgTWFwd29ya3MgbWFwIGNvbnNpc3RzIG9mIGEgaGVpcmFyY2h5IG9mIGxheWVycywgZ3JvdXBzIG9yIHJlZmVyZW5jZXMgdG8gb3RoZXIgbWFwcztcbiAqIGVhY2ggb2YgdGhlc2UgaXMgYSBub2RlIGRlcml2ZWQgZnJvbSB0aGlzIGNsYXNzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kYS9+anVuZWlkeS9hcGkvIyEvYXBpL1N0dWRpby5jb3JlLmVudGl0eS5CYXNlVHJlZU5vZGVFbnRpdHlcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwd29ya3NCYXNlVHJlZU5vZGVFbnRpdHkge1xuXG4gIC8vLyBGaW5kIHRoZSBmaXJzdCBub2RlIHdpdGggdGhlIHNwZWNpZmllZCByZWZlcmVuY2UgSURcbiAgcHVibGljIGZpbmRCeVJlZmVyZW5jZUlkKHJlZklkOiBzdHJpbmcpOiBNYXB3b3Jrc1RyZWVFbnRpdHk7XG5cbn1cblxuLyoqXG4gKiBBIE1hcHdvcmtzIG1hcCBjb25zaXN0cyBvZiBhIGhlaXJhcmNoeSBvZiBsYXllcnMsIGdyb3VwcyBvciByZWZlcmVuY2VzIHRvIG90aGVyIG1hcHM7XG4gKiBlYWNoIG9mIHRoZXNlIGlzIGEgbm9kZSBkZXJpdmVkIGZyb20gdGhpcyBjbGFzcy5cbiAqXG4gKiBAbm90ZSBMYXllcnMgc2hvdWxkIGJlIHJlZHJhd24gYWZ0ZXIgbWFraW5nIGNoYW5nZXMgdGhhdCBhbHRlciBob3cgdGhleSBhcmVcbiAqICAgICAgIGRpc3BsYXllZCBvbiB0aGUgbWFwLCBlLmcuIGNoYW5naW5nIHZpc2liaWxpdHkgb3Igc3R5bGVzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kYS9+anVuZWlkeS9hcGkvIyEvYXBpL1N0dWRpby5jb3JlLmVudGl0eS5UcmVlRW50aXR5XG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcHdvcmtzVHJlZUVudGl0eSBleHRlbmRzIE1hcHdvcmtzQmFzZVRyZWVOb2RlRW50aXR5IHtcblxuICAvLy8gVGhpcyBsYXllciB0cmVlIG5vZGUncyByZWZlcmVuY2UgSURcbiAgcHVibGljIGdldFJlZmVyZW5jZUlkKCk6IHN0cmluZztcblxuICAvLy8gVGhpcyBsYXllciB0cmVlIG5vZGUncyB0aXRsZVxuICBwdWJsaWMgZ2V0VGl0bGUoKTogc3RyaW5nO1xuXG5cblxuICAvKipcbiAgICogUmVkcmF3cyB0aGlzIExheWVyIFNlbGVjdG9yIG5vZGUgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICpcbiAgICogTGF5ZXJzIHNob3VsZCBiZSByZWRyYXduIGFmdGVyIG1ha2luZyBjaGFuZ2VzIHRoYXQgYWx0ZXIgaG93IHRoZXkgYXJlXG4gICAqIGRpc3BsYXllZCBvbiB0aGUgbWFwLCBlLmcuIGNoYW5naW5nIHZpc2liaWxpdHkgb3Igc3R5bGVzLlxuICAgKi9cbiAgcHVibGljIHJlZHJhdygpOiBNYXB3b3Jrc1RyZWVFbnRpdHk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgYSBMYXllciBTZWxlY3RvciBub2RlIGlzIHZpc2libGUuXG4gICAqXG4gICAqIEBwYXJhbSBjaGVja1BhcmVudCBpZiB0cnVlLCB0aGUgbm9kZSdzIHBhcmVudHMgYWxzbyBoYXZlIHRvIGJlIHZpc2libGVcbiAgICogICAgICAgICAgICAgICAgICAgIGZvciB0aGlzIG5vZGUgdG8gYmUgY29uc2lkZXJlZCB2aXNpYmxlLiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gICAqIEByZXR1cm5zIGB0cnVlYCBpZiB2aXNpYmxlLCBgZmFsc2VgIGlmIG5vdFxuICAgKi9cbiAgcHVibGljIGlzVmlzaWJsZShjaGVja1BhcmVudD86IGJvb2xlYW4pOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2aXNpYmlsaXR5IG9mIGEgTGF5ZXIgU2VsZWN0b3Igbm9kZS5cbiAgICpcbiAgICogRm9yIGEgbGF5ZXIgdG8gYmUgdmlzaWJsZSBvbiB0aGUgbWFwLCBhbGwgb2YgaXRzIHBhcmVudCBub2RlcyBtdXN0IGFsc28gYmUgdmlzaWJsZS5cbiAgICogQHBhcmFtIHZpc2libGUgdHJ1ZSB0byBzZXQgdGhlIG5vZGUgdG8gdmlzaWJsZVxuICAgKi9cbiAgcHVibGljIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IE1hcHdvcmtzVHJlZUVudGl0eTtcblxufVxuXG4vKipcbiAqIE1hcHdvcmtzIGxheWVyIGFuZCBjb250ZXh0IHdpdGhpbiB0aGUgU3R1ZGlvIExheWVyIFNlbGVjdG9yLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kYS9+anVuZWlkeS9hcGkvIyEvYXBpL1N0dWRpby5jb3JlLmVudGl0eS5UcmVlRW50aXR5XG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcHdvcmtzVHJlZUxheWVyRW50aXR5IGV4dGVuZHMgTWFwd29ya3NUcmVlRW50aXR5IHtcblxuICAvLy8gVGhlIGZlYXR1cmUgc2V0IElEIG9mIHRoZSBsYXllciBhc3NvY2lhdGVkIHdpdGggdGhpcyBMYXllciBTZWxlY3RvciB0cmVlIG5vZGVcbiAgcHVibGljIGdldEZlYXR1cmVTZXRJZCgpOiBzdHJpbmc7XG5cbiAgLy8vIFRyaWdnZXJzIGFuIGlkZW50aWZ5IGV2ZW50ICh0eXBpY2FsbHkgdHJpZ2dlcmluZyBoaWdobGlnaHRpbmcgd2l0aGluIHRoZSBsYXllciBzZWxlY3RvcilcbiAgcHVibGljIGlkZW50aWZ5KCk6IE1hcHdvcmtzVHJlZUxheWVyRW50aXR5O1xuXG59XG5cbi8qKlxuICogQSBUcmVlTGF5ZXJFbnRpdHkgdGhhdCBjb250YWlucyB2ZWN0b3IgZmVhdHVyZXMuIFZlY3RvciBsYXllcnMgbWF5IGJlIG9mIHR5cGUgQURIT0MsIEZJTFRFUkVEIG9yIFZFQ1RPUi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwd29ya3NUcmVlVmVjdG9yTGF5ZXJFbnRpdHkgZXh0ZW5kcyBNYXB3b3Jrc1RyZWVMYXllckVudGl0eSB7XG5cbiAgLy8vXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnksIG1hcE9wdGlvbnM6IHsgbWFwOiBNYXB3b3Jrc01hcCB9KTtcblxufVxuXG5cbi8qKlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kYS9+anVuZWlkeS9hcGkvIyEvYXBpL1N0dWRpby5jb3JlLmVudGl0eS5GZWF0dXJlRW50aXR5XG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcHdvcmtzRmVhdHVyZUVudGl0eSB7XG5cbiAgcHVibGljIGF0dHJpYnV0ZXM6IHtcbiAgICAvLy8gRGlzcGxheSBsYXllciBuYW1lIGZvciB0aGUgZmVhdHVyZSBpbiB0aGUgdG9vbHRpcC5cbiAgICBkaXNwbGF5TGF5ZXJOYW1lOiBzdHJpbmc7XG5cbiAgICAvLy8gTGlzdCBvZiBmaWVsZHMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSB0b29sdGlwIChrZXlzIG1hcHBlZCB0byBodW1hbiByZWFkYWJsZSBkaXNwbGF5IG5hbWVzKS5cbiAgICBmaWVsZHM6IHtcbiAgICAgIFtodW1hblJlYWRhYmxlTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyOyAvLyBYWFggVE9ETyBDaGVjayB0eXBlc1xuICAgIH1cblxuICAgIC8vLyBMaXN0IG9mIGZpZWxkcyB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHRvb2x0aXAuXG4gICAgcmF3RmllbGRzOiB7XG4gICAgICBbZmllbGROYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7IC8vIFhYWCBUT0RPIENoZWNrIHR5cGVzXG4gICAgfVxuXG4gICAgLy8vIEZlYXR1cmUgSURcbiAgICBpZDogc3RyaW5nO1xuXG4gICAgLy8vIExheWVyIGNvbnRhaW5pbmcgdGhpcyBmZWF0dXJlXG4gICAgbGF5ZXI6IE1hcHdvcmtzVHJlZUxheWVyRW50aXR5O1xuXG4gICAgLy8vIEZlYXR1cmUgdHlwZVxuICAgIHR5cGU6IE1hcHdvcmtzRmVhdHVyZVR5cGU7XG5cbiAgICAvLy8gRmxhZyBkZW5vdGluZyB3aGV0aGVyIHRoZSBmZWF0dXJlIGlzIGZpbGxlZC5cbiAgICBmaWxsZWQ6IGJvb2xlYW47XG4gIH1cblxuICAvLy9cbiAgcHVibGljIGdldERpc3BsYXlOYW1lKCk6IHN0cmluZztcblxufVxuXG4vLy9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcHdvcmtzVmVjdG9yUG9pbnRFbnRpdHkgZXh0ZW5kcyBNYXB3b3Jrc0ZlYXR1cmVFbnRpdHkge1xuXG59XG5cbi8vL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwd29ya3NWZWN0b3JQb2x5Z29uRW50aXR5IGV4dGVuZHMgTWFwd29ya3NGZWF0dXJlRW50aXR5IHtcblxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRoYXQgaXMgZ2VuZXJhdGVkIHdoZW4gYSB1c2VyIHBlcmZvcm1zIGludGVyYWN0aXZlbHkgdXNpbmcgdGhlIG1vdXNlIG9uIHRoZSB0aGUgbWFwIG9yIGZlYXR1cmVzIG9uIHRoZSBtYXAuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcHdvcmtzRmVhdHVyZUV2ZW50IHtcbiAgLyoqXG4gICAqIFRoZSB2ZWN0b3IgZmVhdHVyZSBiZWluZyAnYnJvd3NlZCc7IG1heSBiZSBudWxsIGlmIG5vIGZlYXR1cmUgaW52b2x2ZWQuXG4gICAqL1xuICBnZXRGZWF0dXJlKCk6IE1hcHdvcmtzRmVhdHVyZUVudGl0eSB8IG51bGw7XG5cbiAgLy8vIENoZWNrIGlmIHRoZXJlIGlzIGFueSBmZWF0dXJlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGZlYXR1cmUgZXZlbnQuXG4gIGlzQW55RmVhdHVyZSgpOiBib29sZWFuO1xuXG4gIC8vLyBUaGUgWCBQb3NpdGlvbiBvZiB0aGUgbW91c2Ugd2hpY2ggY2F1c2VkIHRoaXMgZXZlbnQuXG4gIGdldFgoKTogbnVtYmVyO1xuXG4gIC8vLyBUaGUgWSBQb3NpdGlvbiBvZiB0aGUgbW91c2Ugd2hpY2ggY2F1c2VkIHRoaXMgZXZlbnQuXG4gIGdldFkoKTogbnVtYmVyO1xuXG4gIC8vLyBUaGUgZXZlbnQgdHlwZVxuICBnZXRUeXBlKCk6IE1hcHdvcmtzTWFwRXZlbnRUeXBlO1xufVxuXG4vKipcbiAqIENsYXNzIHByb3ZpZGVkIHRvIGRpc3BsYXkgdGVtcGxhdGUgKG1vdXNlb3ZlciwgbW91c2UgY2xpY2sgZXRjKSBmdW5jdGlvbnMuXG4gKlxuICogQHNlZSBNYXB3b3Jrc0ZlYXR1cmVEaXNwbGF5VGVtcGxhdGVzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcHdvcmtzRmVhdHVyZURpc3BsYXlDb250ZXh0IHtcblxuICAvLyBoZWxwZXJzXG4gIC8vIERPTVB1cmlmeVxuICAvLyBfXG5cbiAgLy8vIFRoZSBDU1MgY2xhc3MgbmFtZSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdG9wLWxldmVsIGVuY2Fwc3VsYXRpbmcgZWxlbWVudCAodHlwaWNhbGx5IGEgYDxkaXY+YClcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG5cbiAgLy8vIExheWVyIG5hbWUsIGZvcm1hdHRlZCBmb3IgZGlzcGxheSwgb2YgdGhlIGxheWVyIGNvbnRhaW5pbmcgdGhlIGZlYXR1cmUgaW4gdGhlIHRvb2x0aXAuXG4gIGRpc3BsYXlMYXllck5hbWU6IHN0cmluZztcblxuICAvLyBGZWF0dXJlIG5hbWUsIGZvcm1hdHRlZCBmb3IgZGlzcGxheSBpbiB0aGUgdG9vbHRpcC5cbiAgZGlzcGxheU5hbWU6IHN0cmluZztcblxuICAvLy9cbiAgbW9kZWw6IE1hcHdvcmtzRmVhdHVyZUVudGl0eTtcblxuICAvLy8gTGlzdCBvZiBmaWVsZHMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSB0b29sdGlwIChrZXlzIG1hcHBlZCB0byBodW1hbiByZWFkYWJsZSBkaXNwbGF5IG5hbWVzKS5cbiAgZmllbGRzOiB7XG4gICAgW2h1bWFuUmVhZGFibGVOYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7IC8vIFhYWCBUT0RPIENoZWNrIHR5cGVzXG4gIH1cblxuICAvLyBBcyBwZXIgZmllbGRzLCBidXQgc29ydGVkIChhbmQgd2l0aCBfcHJpbWFyeSBrZXlfIGFubm90YXRpb24pXG4gIHNvcnRlZEZpZWxkczoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgICBpc0tleTogYm9vbGVhbjtcbiAgfVtdO1xuXG4gIC8vLyBGZWF0dXJlIElEXG4gIGlkOiBzdHJpbmc7XG5cbiAgLy8vIExheWVyIGNvbnRhaW5pbmcgdGhpcyBmZWF0dXJlXG4gIGxheWVyOiBNYXB3b3Jrc1RyZWVMYXllckVudGl0eTtcblxuXG4gIC8vLyBUaGUgeCBwb3NpdGlvbiBmb3IgdG9vbHRpcCB0byBzaG93LlxuICB4OiBudW1iZXI7XG5cbiAgLy8vIFRoZSB5IHBvc2l0aW9uIGZvciB0b29sdGlwIHRvIHNob3cuXG4gIHk6IG51bWJlcjtcblxuICAvLy8gQSByZWZlcmVuY2UgdG8gdGhlIG1hcCB0aGlzIGZlYXR1cmUgYmVsb25ncyB0by5cbiAgbWFwOiBNYXB3b3Jrc01hcDtcblxuICAvLy8gVGhlIGV2ZW50IHR5cGUgZm9yIHRoaXMgdG9vbHRpcC5cbiAgdHlwZTogTWFwd29ya3NGZWF0dXJlRXZlbnRUeXBlO1xuXG4gIC8vLyBEZWZhdWx0IHRlbXBsYXRlIGZ1bmN0aW9uIHVuZGVyIHRvIHJlbmRlciBIVE1MIGZvciB0aXMgZGlzcGxheSBldmVudC5cbiAgdGVtcGxhdGU6IChjb250ZXh0OiBNYXB3b3Jrc0ZlYXR1cmVEaXNwbGF5Q29udGV4dCkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgZGlzcGxheSBldmVudCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgYSBkZWZhdWx0IG9yIGNoaWxkIHZpZXcuXG4gICAqL1xuICBtb2RlOiBNYXB3b3Jrc1Rvb2x0aXBWaWV3TW9kZTtcblxuICAvKipcbiAgICogVGhlIGNvbGxhcHNlIHN0YXR1cyBpbiBjaGlsZCB2aWV3IG1vZGUuXG4gICAqL1xuICBjb2xsYXBzZTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIGZlYXR1cmUgZGlzcGxheSB0ZW1wbGF0ZXM7IHRob3NlIHNldCBkZXBlbmQgb24gdGhlXG4gKiBldmVudCB0eXBlIChtb3VzZW92ZXIsIG1vdXNlIGNsaWNrLCBvciBkcmlsbC1kb3duLyBhbGwgdmlzaWJsZSBmZWF0dXJlcykuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcHdvcmtzRmVhdHVyZURpc3BsYXlUZW1wbGF0ZXMge1xuICAvKipcbiAgICogVGhlIG1vdXNlIG92ZXIgdG9vbHRpcCB0ZW1wbGF0ZVxuICAgKiBvciB1bmRlZmluZWQgaWYgdGhpcyBpcyBub3QgdGhlIG1vdXNlb3ZlciBldmVudC5cbiAgICovXG4gIG1vdXNlb3ZlclRwbD86IChjb250ZXh0OiBNYXB3b3Jrc0ZlYXR1cmVEaXNwbGF5Q29udGV4dCkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgaGlnaGxpZ2h0ZWQgY2xpY2sgdG9vbHRpcCB0ZW1wbGF0ZVxuICAgKiBvciB1bmRlZmluZWQgaWYgdGhpcyBpcyBub3QgdGhlIGhpZ2hsaWdodGVkIGNsaWNrIGV2ZW50LlxuICAgKi9cbiAgY2xpY2tUcGw/OiAoY29udGV4dDogTWFwd29ya3NGZWF0dXJlRGlzcGxheUNvbnRleHQpID0+IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGN1c3RvbSB0b29sdGlwIHRlbXBsYXRlXG4gICAqIG9yIHVuZGVmaW5lZCBpZiB0aGlzIGlzIG5vdCB0aGUgY3VzdG9tIHBvcG92ZXIgZXZlbnQuXG4gICAqL1xuICBjdXN0b21Qb3BvdmVyVHBsPzogKGNvbnRleHQ6IE1hcHdvcmtzRmVhdHVyZURpc3BsYXlDb250ZXh0KSA9PiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXlvdXQgdGVtcGxhdGUgZm9yIHRoZSBhbGwgdmlzaWJsZSBmZWF0dXJlIGNsaWNrIGV2ZW50O1xuICAgKiB1bmRlZmluZWQgaWYgdGhpcyBpcyBub3QgdGhlIGFsbCB2aXNpYmxlIGZlYXR1cmUgY2xpY2sgZXZlbnQuXG4gICAqL1xuICBsYXlvdXQ/OiAoY29udGV4dDogTWFwd29ya3NGZWF0dXJlRGlzcGxheUNvbnRleHQpID0+IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHRpdGxlIHRlbXBsYXRlIGZvciB0aGUgYWxsIHZpc2libGUgZmVhdHVyZSBjbGljayBldmVudDtcbiAgICogdW5kZWZpbmVkIGlmIHRoaXMgaXMgbm90IHRoZSBhbGwgdmlzaWJsZSBmZWF0dXJlIGNsaWNrIGV2ZW50LlxuICAgKi9cbiAgdGl0bGU/OiAoY29udGV4dDogTWFwd29ya3NGZWF0dXJlRGlzcGxheUNvbnRleHQpID0+IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGxheWVyIGdyb3VwIHRlbXBsYXRlIGZvciB0aGUgYWxsIHZpc2libGUgZmVhdHVyZSBjbGljayBldmVudDtcbiAgICogdW5kZWZpbmVkIGlmIHRoaXMgaXMgbm90IHRoZSBhbGwgdmlzaWJsZSBmZWF0dXJlIGNsaWNrIGV2ZW50LlxuICAgKi9cbiAgbGF5ZXJHcm91cD86IChjb250ZXh0OiBNYXB3b3Jrc0ZlYXR1cmVEaXNwbGF5Q29udGV4dCkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmVhdHVyZSB0ZW1wbGF0ZSBmb3IgdGhlIGFsbCB2aXNpYmxlIGZlYXR1cmUgY2xpY2sgZXZlbnQ7XG4gICAqIHVuZGVmaW5lZCBpZiB0aGlzIGlzIG5vdCB0aGUgYWxsIHZpc2libGUgZmVhdHVyZSBjbGljayBldmVudC5cbiAgICovXG4gIGZlYXR1cmU/OiAoY29udGV4dDogTWFwd29ya3NGZWF0dXJlRGlzcGxheUNvbnRleHQpID0+IHN0cmluZztcbn1cblxuLy8vXG5leHBvcnQgZW51bSBNYXB3b3Jrc0ZlYXR1cmVUeXBlIHtcbiAgLy8vXG5cdFVOS05PV04gPSAwLFxuXG5cdC8vLyBQb2ludFxuXHRQT0lOVCA9IDEsXG5cblx0Ly8vIFBvbHlsaW5lXG5cdFBPTFlMSU5FID0gMixcblxuXHQvLy8gVGV4dFxuXHRURVhUID0gMyxcblxuXHQvLy8gQ2lyY2xlXG5cdENJUkNMRSA9IDQsXG5cblx0Ly8vIFBvbHlnb25cblx0UE9MWUdPTiA9IDUsXG5cblx0Ly8vIFJlY3RhbmdsZVxuXHRSRUNUQU5HTEUgPSA2LFxuXG5cdC8vLyBNdWx0aSBnZW9tZXRyeSBmZWF0dXJlXG5cdE1VTFRJID0gNyxcblxuXHQvLy8gSW1hZ2Vcblx0SU1BR0UgPSA4LFxuXG5cdC8vLyBBbm5vdGF0aW9uXG5cdEFOTk9UQVRJT04gPSAxNlxufVxuXG4vLy9cbmV4cG9ydCBlbnVtIE1hcHdvcmtzRmVhdHVyZUV2ZW50VHlwZSB7XG5cdC8qKlxuXHQgKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgbW91c2Ugb3ZlciBhIGZlYXR1cmUuXG5cdCAqL1xuXHRNT1VTRU9WRVIgPSAwLFxuXHQvKipcblx0ICogQSBtb3VzZSBjbGljayBldmVudCBvbiB0aGUgbWFwIG9yIGZlYXR1cmUuXG5cdCAqL1xuXHRNT1VTRUNMSUNLID0gMSxcblx0LyoqXG5cdCAqIEEgcmlnaHQgY2xpY2sgZXZlbnQgb24gdGhlIG1hcCBvciBmZWF0dXJlLlxuXHQgKi9cblx0TU9VU0VDTElDS19SSUdIVCA9IDIsXG5cdC8qKlxuXHQgKiBBICdtb3VzZSBwcmVzcycgb3IgJ3RvdWNoLXN0YXJ0JyBldmVudC5cblx0ICovXG5cdE1PVVNFRE9XTiA9IDMsXG5cdC8qKlxuXHQgKiBBIHRvb2x0aXAgZXZlbnQgd2hlbiB0aGUgbW91c2UgcG9zaXRpb24gaXMgYXQgYSBwb3NpdGlvbiBvdmVyIHBlcmlvZCBvZlxuXHQgKiB0aW1lLiBUaGlzIGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgdG9vbHRpcCBmb3IgYSBmZWF0dXJlLlxuXHQgKi9cblx0VE9PTFRJUCA9IDRcbn07XG5cbi8qKlxuICogVGhlIFRvb2x0aXBWaWV3IHJlbmRlciBtb2RlLlxuICovXG5leHBvcnQgZW51bSBNYXB3b3Jrc1Rvb2x0aXBWaWV3TW9kZSB7XG5cdC8qKiBSZW5kZXIgdG9vbHRpcCB2aWV3IGFzIHN0YW5kIGFsb25lIHZpZXcgKi9cblx0VklFVyA9ICd2aWV3Jyxcblx0LyoqIFJlbmRlciB0b29sdGlwIHZpZXcgYXMgcGFydCBvZiBjb21wb3NpdGUgdmlldyAqL1xuXHRDSElMRF9WSUVXID0gJ2NoaWxkVmlldydcbn07XG5cbi8vL1xuZXhwb3J0IHR5cGUgTWFwd29ya3NNYXBGZWF0dXJlRXZlbnRUeXBlID0gJ2ZlYXR1cmU6bW91c2VvdmVyJyB8ICdmZWF0dXJlOm1vdXNlY2xpY2snIHwgJ2ZlYXR1cmU6dG9vbHRpcCcgfCAnZmVhdHVyZTpsb25ncHJlc3MnOyAvLyBYWFggVE9ETyBCZXR0ZXIgbmFtZVxuLy8vXG5leHBvcnQgdHlwZSBNYXB3b3Jrc01hcEV2ZW50VHlwZSA9ICdyZWFkeScgfCAnYWNjZXNzVG9rZW46Y2hhbmdlJyB8ICdzZXNzaW9uOmNoYW5nZScgfCAnYmVmb3JlOnJlbmRlcicgfCBNYXB3b3Jrc01hcEZlYXR1cmVFdmVudFR5cGU7XG5cbi8vL1xuZXhwb3J0IGludGVyZmFjZSBNYXB3b3Jrc0V2ZW50RW1pdHRlcjxUQ29udGV4dCwgVD4ge1xuICBvbihldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogKHRoaXM6IFRDb250ZXh0LCB0OiBULCAuLi5hcmdzOiBhbnlbXSkgPT4gYW55KTogdm9pZDtcbiAgb2ZmKGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiAodGhpczogVENvbnRleHQsIHQ6IFQsIC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpOiB2b2lkO1xufVxuXG4vLy8gSGVscGVyIGZvciB0aGUgUlhKUyBgZnJvbUV2ZW50KClgIGZ1bmN0aW9uIHdoaWNoIHJlY29nbmlzZWQgTWFwd29ya3NNYXAgZXZlbnRzXG5leHBvcnQgZnVuY3Rpb24gZnJvbUV2ZW50PFQ+KFxuICB0YXJnZXQ6IE1hcHdvcmtzRXZlbnRFbWl0dGVyPGFueSwgVD4gfCBBcnJheUxpa2U8TWFwd29ya3NFdmVudEVtaXR0ZXI8YW55LCBUPj4sXG4gIGV2ZW50TmFtZTogTWFwd29ya3NNYXBFdmVudFR5cGVcbik6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gcnhqc0Zyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSk7XG59XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBNYXB3b3JrcyBtYXAgY29tcG9uZW50LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNYXB3b3Jrc01hcCB7XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIE1hcHdvcmtzIEFQSSBVcmwuXG4gICAqL1xuICBwdWJsaWMgZ2V0U2VydmVyVXJsKCk6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IE9BdXRoMiBBY2Nlc3MgVG9rZW4uXG4gICAqL1xuICBwdWJsaWMgZ2V0QWNjZXNzVG9rZW4oKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgT0F1dGgyIEFjY2VzcyBUb2tlbiB0eXBlLCB1c3VhbGx5IGBCZWFyZXJgLlxuICAgKi9cbiAgcHVibGljIGdldFRva2VuVHlwZSgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGF1dGhvcml6YXRpb24gc2NoZW1lIHR5cGUgYW5kIGFjY2VzcyB0b2tlbixcbiAgICogd2hpY2ggbWF5IHVzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBIVFRQIEF1dGhvcml6YXRpb24gaGVhZGVyLlxuICAgKi9cbiAgcHVibGljIGdldEF1dGhvcml6YXRpb24oKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIE1hcHdvcmtzIEFQSSB2ZXJzaW9uLlxuICAgKi9cbiAgcHVibGljIGdldEFwaVZlcnNpb24oKTogc3RyaW5nO1xuXG4gIC8vL1xuICBwdWJsaWMgbG9naW4oYXJncz86IFNpZ25pblBvcHVwQXJncyk6IFByb21pc2U8TWFwd29ya3NVc2VyPjtcblxuICAvLy9cbiAgcHVibGljIGxvZ2luQW5vbnltb3VzKCk6IFByb21pc2U8TWFwd29ya3NVc2VyPjtcblxuICAvLy9cbiAgcHVibGljIGxvZ291dChhcmdzPzogU2lnbm91dFJlZGlyZWN0QXJncyk6IFByb21pc2U8dm9pZD47XG5cbiAgLy8vXG4gIHB1YmxpYyBnZXRVc2VyKCk6IFByb21pc2U8TWFwd29ya3NVc2VyPjtcblxuICAvLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBtYXAgaXMgcmVhZHlcbiAgcHVibGljIGlzUmVhZHkoKTogYm9vbGVhbjtcblxuICAvLy9cbiAgcHVibGljIGdldENvbnRyb2woY29udHJvbE5hbWU6IHN0cmluZyk6IE1hcHdvcmtzU3R1ZGlvQ29udHJvbDtcblxuICAvLy9cbiAgcHVibGljIGdldFRyZWUoKTogTWFwd29ya3NUcmVlRW50aXR5O1xuXG4gIC8vLyBSZXR1cm5zIHRoZSBjb29yZGluYXRlIHJlZmVyZW5jZSBzeXN0ZW0gb2YgdGhlIG1hcC5cbiAgcHVibGljIGdldENycygpOiBzdHJpbmc7XG5cbiAgLy8vIFJldHVybnMgdGhlIGNlbnRlciBsb2NhdGlvbiBvZiB0aGUgY3VycmVudCB2aWV3IGFzIGEgY29vcmRpbmF0ZSBgW3gseV1gLlxuICBwdWJsaWMgZ2V0Vmlld0NlbnRlcigpOiBudW1iZXJbXVxuXG4gIC8vL1xuICBwdWJsaWMgcmV0cmlldmVMYXllcnNCeVJlZmVyZW5jZUlkcyhyZWZJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxNYXB3b3Jrc1RyZWVMYXllckVudGl0eVtdPjtcblxuICAvLy8gU2VhcmNoIGEgc2V0IG9mIGxheWVycyBmb3IgZmVhdHVyZXMgYmFzZWQgb24gYSBjcml0ZXJpYSBmaWx0ZXIuXG4gIHB1YmxpYyBsYXllclNlYXJjaChpbnB1dDogTWFwd29ya3NMYXllclNlYXJjaElucHV0KTogUHJvbWlzZTxhbnk+OyAvLyBYWFggVE9ETyA6IGpRdWVyeS5qcVhIUlxuXG4gIC8vLyBBbmltYXRlcyB0aGUgY3VycmVudCB2aWV3IHRvIHNwZWNpZmllZCB4LCB5IGNvb3JkaW5hdGVzIG9yIGV4dGVudHMuXG4gIHB1YmxpYyBhbmltYXRlVG8ob3B0aW9uczogTWFwd29ya3NBbmltYXRlVG9PcHRpb25zKTogdm9pZDtcblxuICAvLyBYWFggVE9ETyBXSVBcblxuICBwdWJsaWMgb24oZXZlbnRUeXBlOiAncmVhZHknLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IE1hcHdvcmtzTWFwO1xuICBwdWJsaWMgb24oZXZlbnRUeXBlOiAnYWNjZXNzVG9rZW46Y2hhbmdlJywgY2FsbGJhY2s6ICh0b2tlblR5cGU6IHN0cmluZywgYWNjZXNzVG9rZW46IHN0cmluZykgPT4gdm9pZCk6IE1hcHdvcmtzTWFwO1xuICBwdWJsaWMgb24oZXZlbnRUeXBlOiAnc2Vzc2lvbjpjaGFuZ2UnLCBjYWxsYmFjazogKHVzZXI6IFVzZXIpID0+IHZvaWQpOiBNYXB3b3Jrc01hcDsgLy8gWFhYIFRPRE8gQ2hlY2sgdXNlciBwYXJhbSB0eXBlXG5cbiAgcHVibGljIG9uKGV2ZW50VHlwZTogTWFwd29ya3NNYXBGZWF0dXJlRXZlbnRUeXBlLCBjYWxsYmFjazogKGV2ZW50OiBNYXB3b3Jrc0ZlYXR1cmVFdmVudCkgPT4gdm9pZCk6IE1hcHdvcmtzTWFwO1xuICBwdWJsaWMgb2ZmKGV2ZW50VHlwZTogTWFwd29ya3NNYXBGZWF0dXJlRXZlbnRUeXBlLCBjYWxsYmFjazogKGV2ZW50OiBNYXB3b3Jrc0ZlYXR1cmVFdmVudCkgPT4gdm9pZCk6IE1hcHdvcmtzTWFwO1xuXG4gIC8vIFhYWCBUT0RPXG4gIFtuYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbi8vL1xuZXhwb3J0IGludGVyZmFjZSBNYXB3b3Jrc1N0dWRpb0NvbmZpZ09wdGlvbnMge1xuICBtYXB3b3Jrc1BhdGg6IHN0cmluZztcblxuICAvLy9cbiAgYWNjZXNzPzogTWFwd29ya3NBY2Nlc3M7XG5cbiAgLy8vIFRoZSBJRCBvZiB0aGUgbWFwIHRvIGxvYWQuXG4gIG1hcD86IHN0cmluZztcblxuICAvLy8gVGhlIHJlZmVyZW5jZSBJRCBvZiB0aGUgbWFwIHRvIGxvYWQuIFRoaXMgd2lsbCBiZSBpZ25vcmVkIGlmIGEgbWFwIElEIGlzIHByb3ZpZGVkLlxuICBtYXBSZWY/OiBzdHJpbmc7XG5cbiAgLy8vIFhYWCBUT0RPXG4gIFtuYW1lOiBzdHJpbmddOiBhbnk7XG5cbiAgLy8vXG4gIG1hcHdvcmtzTG9naW5Qcm92aWRlcj86IE1hcHdvcmtzVXNlck1hbmFnZXJTZXR0aW5ncztcbn1cblxuZXhwb3J0IGVudW0gTWFwd29ya3NBY2Nlc3Mge1xuICAvKiogU3RhcnQgd2l0aCBBbm9ueW1vdXMgbWFwIGFjY2VzcyBhbmQgZG8gbm90IHByb3ZpZGUgb3B0aW9uIHRvIHNpZ24gaW4gKi9cbiAgQW5vbnltb3VzID0gJ2Fub255bW91cy1vbmx5JyxcbiAgLyoqIFN0YXJ0IHdpdGggQW5vbnltb3VzIG1hcCBhY2Nlc3MgQU5EIGFsbG93IHRoZSBvcHRpb24gdG8gc2lnbiBpbiAqL1xuICBBbm9ueW1vdXNPclJlZ2lzdGVyZWQgPSAnYW5vbnltb3VzLXJlZ2lzdGVyZWQnLFxuICAvKiogUmVxdWlyZSB1c2VycyB0byBzaWduIGluIHdpdGggYSByZWdpc3RlcmVkIGFjY291bnQgb25seSAqL1xuICBSZWdpc3RlcmVkT25seSA9ICdyZWdpc3RlcmVkLW9ubHknLFxufVxuXG4vKipcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGEvfmp1bmVpZHkvYXBpLyMhL2FwaS9TdHVkaW8uY29yZS5jb250cm9sLkJhc2VDb250cm9sXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcHdvcmtzU3R1ZGlvQ29udHJvbCB7XG5cbiAgLy8vXG4gIG5hbWU6IFN0cmluZztcblxuICAvLy9cbiAgcHVibGljIGFkZFRvKG1hcDogTWFwd29ya3NNYXAsIG9wdGlvbnM/OiB7IGluZGV4OiBudW1iZXIgfSk6IE1hcHdvcmtzU3R1ZGlvQ29udHJvbDtcbn1cblxuLyoqXG4gKlxuICogQHNlZSBodHRwczovL2RhL35qdW5laWR5L2FwaS8jIS9hcGkvU3R1ZGlvLmNvcmUuY29udHJvbC50b29sdGlwLlRvb2x0aXBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwd29ya3NTdHVkaW9Ub29sdGlwQ29udHJvbCBleHRlbmRzIE1hcHdvcmtzU3R1ZGlvQ29udHJvbCB7XG5cbiAgLy8gWFhYIFRPRE8gQ29uZmlybSBjYWxsYmFjayBvcGVyYXRpb25cbiAgLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2sgdXNlZCB3aGVuIHRoZXJlIGlzIHRlbXBsYXRlIGRhdGEgdGhhdFxuXHQvLyAgKiByZXF1aXJlcyBhc3luY2hyb25vdXMgbG9hZGluZy4gQ2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIHRlbXBsYXRlXG5cdC8vICAqIG9iamVjdCBkZXNjcmliZWQgYWJvdmUgdG8gcmVuZGVyIHRoZSB0b29sdGlwIGFnYWluIHdpdGggdXBkYXRlZFxuXHQvLyAgKiB0ZW1wbGF0ZS5cblx0Ly8gICovXG4gIHB1YmxpYyBvbihldmVudFR5cGU6ICdiZWZvcmU6cmVuZGVyJywgY2FsbGJhY2s6IChmZWF0dXJlT3JGZWF0dXJlczogTWFwd29ya3NGZWF0dXJlRW50aXR5LCB0ZW1wbGF0ZU9iamVjdDogTWFwd29ya3NGZWF0dXJlRGlzcGxheVRlbXBsYXRlcywgcmVyZW5kZXJDYWxsYmFjazogKHRlbXBsYXRlT2JqZWN0OiBNYXB3b3Jrc0ZlYXR1cmVEaXNwbGF5VGVtcGxhdGVzKSA9PiB2b2lkKSA9PiB2b2lkKTogdm9pZDsgLy8gWFhYIFRPRE8gXCJhbGwgZmVhdHVyZXNcIlxuXG59XG5cblxuLyoqXG4gKiBUaGUgaW5wdXQgb2JqZWN0IHRvIHVzZSBmb3Ige0BsaW5rIFN0dWRpby5jb3JlLk1hcCNsYXllclNlYXJjaCBMYXllciBTZWFyY2h9LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hcHdvcmtzTGF5ZXJTZWFyY2hJbnB1dCB7XG4gIGlucHV0OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc3VsdCBzZXQgc2l6ZS5cbiAgICAgKiBAZGVmYXVsdFZhbHVlIDEwXG4gICAgICovXG4gICAgc2l6ZT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGFydGluZyBpbmRleCAob2Zmc2V0KS5cbiAgICAgKiBUaGlzIGlzIHVzZWQgZm9yIHNpdHVhdGlvbnMgd2hlcmUgcGFnaW5nIG9mIHJlc3VsdHMgaXMgcmVxdWlyZWQuXG4gICAgICogQGRlZmF1bHRWYWx1ZSAwXG4gICAgICovXG4gICAgZnJvbT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHZlY3RvciBsYXllcnMgdG8gc2VhcmNoLlxuICAgICAqL1xuICAgIGxheWVyczogTWFwd29ya3NUcmVlVmVjdG9yTGF5ZXJFbnRpdHlbXTtcblxuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSB7U3R1ZGlvLmNvcmUuZW50aXR5LnF1ZXJ5LkZpbHRlcn0gZmlsdGVyIFhYWCBUT0RPXG4gICAgICogVGhlIGZpbHRlciB0byBhcHBseSBvbiB0aGUgbGF5ZXIgc2VhcmNoLlxuICAgICAqL1xuICAgIGZpbHRlcj86IHsgW246IHN0cmluZ106IEpzb24gfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWVsZHMgdG8gaW5jbHVkZSBpbiB0aGUgcmVzdWx0LlxuICAgICAqL1xuICAgIGluY2x1ZGU6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogQHByb3BlcnR5IHtTdHVkaW8uY29yZS5lbnRpdHkucXVlcnkuUXVlcnl9IHF1ZXJ5IFhYWCBUT0RPXG4gICAgICogUXVlcnkgc3RyaW5nIHRvIHNlYXJjaC5cbiAgICAgKi9cbiAgICBxdWVyeT86IHsgW246IHN0cmluZ106IEpzb24gfTtcbiAgfVtdO1xufVxuXG5cbi8qKlxuICogSW5wdXQgb3B0aW9ucyBmb3IgYSBtYXAgYW5pbWF0aW9uIG9wZXJhdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXB3b3Jrc0FuaW1hdGVUb09wdGlvbnMge1xuICAvKipcblx0ICogVGhlIFggY29vcmRpbmF0ZSB0byBhbmltYXRlIHRvOyBwcm92aWRlIGVpdGhlciBgKHgseSlgIG9yIGBleHRlbnRgLlxuICAgKi9cbiAgIHg/OiBudW1iZXI7XG5cbiAgLyoqXG5cdCAqIFRoZSBZIGNvb3JkaW5hdGUgdG8gYW5pbWF0ZSB0bzsgcHJvdmlkZSBlaXRoZXIgYCh4LHkpYCBvciBgZXh0ZW50YC5cbiAgICovXG4gICB5PzogbnVtYmVyO1xuXG4gIC8qKlxuXHQgKiBUaGUgWCBjb29yZGluYXRlIHRvIGFuaW1hdGUgdG87IHByb3ZpZGUgZWl0aGVyIGAoeCx5KWAgb3IgYGV4dGVudGAuXG4gICAqL1xuICAgZXh0ZW50PzogYW55OyAvLyBYWFggVE9ET1xuXG4gIC8vL1xuICB0YXJnZXRTY2FsZT86IG51bWJlcjtcblxuICAvKipcblx0ICogVGhlIG11bHRpcGxpZXIgYXBwbGllZCB0byB0aGUgdGFyZ2V0IHNjYWxlLlxuICAgKiBAZGVmYXVsdFZhbHVlIDFcbiAgICovXG4gIHRhcmdldFNjYWxlTXVsdGlwbGllcj86IG51bWJlclxuXG4gIC8vLyBUaGUgYW5pbWF0aW9uIHN0eWxlLlxuICBhbmltYXRpb25TdHlsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gZHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMsXG4gICAqIG5vdGluZyB0aGF0IHRoZSBhbmltYXRpb24gY2FuIGJlIHNob3J0ZXIgaWYgdGhlIHZpZXdcblx0ICogaXMgY2xvc2VyIHRvIHRoZSBkZXN0aW5hdGlvbiBzY2FsZSBvciBwb3NpdGlvbi5cbiAgICogQGRlZmF1bHRWYWx1ZSA0MDAwXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcblxuICAvKlxuXHQgKiBUaGUgZnVuY3Rpb24gY2FsbGVkIHdoZW4gY29tcGxldGUuXG5cdCAqL1xuICBjYWxsYmFjaz86ICgpID0+IHZvaWQ7XG59XG5cblxuLy8vXG5leHBvcnQgaW50ZXJmYWNlIE1hcHdvcmtzVXNlck1hbmFnZXJTZXR0aW5ncyBleHRlbmRzIFVzZXJNYW5hZ2VyU2V0dGluZ3Mge1xuICAvKipcbiAgICogUHJlZml4IHVzZWQgZm9yIGtleXMgaW4gTG9jYWxTdG9yYWdlIHVzZWQgdG8gc3RvcmUgT0F1dGgyL09JREMgYXV0aG9yaXNhdGlvbiBzdGF0ZTtcbiAgICogZGVmYXVsdHMgdG8gdGhlIE9BdXRoMiBDbGllbnQgSUQuXG4gICAqL1xuICBzdG9yYWdlX3ByZWZpeD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHVzZXIgZW1haWwgcmVwcmVzZW50aW5nIHRoZSBNYXB3b3JrcyBBbm9ueW1vdXMgVXNlciAoaWYgZW5hYmxlZCBmb3IgdGhlIE1hcHdvcmtzIE9yZ2FuaXNhdGlvbik7XG4gICAqIHRoaXMgaXMgdXN1YWxseSBgbm9yZXBseUBwdWJsaWMtYW5vbnltb3VzLm1hcHdvcmtzLmlvYC5cbiAgICovXG4gIGFub255bW91c1VzZXI/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogTWFwd29ya3MgdXNlciB0eXBlcy5cbiAqIEBzZWUgaHR0cHM6Ly9rcm9uZG9yLmFtcmlzdGFyLmNvbS9iaXRidWNrZXQvcHJvamVjdHMvUFBNL3JlcG9zL21hcHdvcmtzLW1hbmFnZW1lbnQtY29uc29sZS9icm93c2Uvc3JjL2FwcC9hcGkvbW9kZWxzL3N5c3RlbS11c2VyLXR5cGUudHMjOVxuICogQHNlZSBodHRwczovL2tyb25kb3IuYW1yaXN0YXIuY29tL2JpdGJ1Y2tldC9wcm9qZWN0cy9QUE0vcmVwb3Mvb3JnLWRpcmVjdG9yeS9icm93c2Uvc3JjL2VudGl0eS90eXBlcy50c1xuICovXG5leHBvcnQgZW51bSBNYXB3b3Jrc1VzZXJUeXBlIHtcbiAgT3JnID0gJ29yZ191c2VyJyxcbiAgU3RhbmRhbG9uZSA9ICdzdGFuZGFsb25lX3VzZXInLFxufVxuXG4vKipcbiAqIE1hcHdvcmtzIHVzZXIgcm9sZXMuXG4gKiBAc2VlIGh0dHBzOi8va3JvbmRvci5hbXJpc3Rhci5jb20vYml0YnVja2V0L3Byb2plY3RzL1BQTS9yZXBvcy9tYXB3b3Jrcy1tYW5hZ2VtZW50LWNvbnNvbGUvYnJvd3NlL3NyYy9hcHAvYXBpL21vZGVscy9zdGFuZGFsb25lLXVzZXItcm9sZS50c1xuICogQHNlZSBodHRwczovL2tyb25kb3IuYW1yaXN0YXIuY29tL2JpdGJ1Y2tldC9wcm9qZWN0cy9QUE0vcmVwb3MvbWFwd29ya3MtbWFuYWdlbWVudC1jb25zb2xlL2Jyb3dzZS9zcmMvYXBwL2FwaS9tb2RlbHMvb3JnLXVzZXItcm9sZS50c1xuICogQHNlZSBodHRwczovL2tyb25kb3IuYW1yaXN0YXIuY29tL2JpdGJ1Y2tldC9wcm9qZWN0cy9QUE0vcmVwb3Mvb3JnLWRpcmVjdG9yeS9icm93c2Uvc3JjL2VudGl0eS90eXBlcy50c1xuICovXG5leHBvcnQgZW51bSBNYXB3b3Jrc1VzZXJSb2xlIHtcbiAgQWxsVXNlcnMgPSAnYWxsX3VzZXJzJyxcbiAgQW5vbnltb3VzID0gJ2Fub255bW91cycsXG4gIEFwcFVzZXIgPSAnYXBwX3VzZXInLFxuICBGcmVlVXNlciA9ICdmcmVlX3VzZXInLFxuICBNYXBEZXNpZ25lciA9ICdtYXBfZGVzaWduZXInLFxuICBNYXBEZXNpZ25lckluZGl2aWR1YWwgPSAnbWFwX2Rlc2lnbmVyX2luZGl2aWR1YWwnLFxuICBPcmdBZG1pbiA9ICdvcmdfYWRtaW4nLFxuICBPcmdTdWJzY3JpYmVyID0gJ29yZ19zdWJzY3JpYmVyJyxcbiAgU3lzdGVtQWRtaW4gPSAnc3lzdGVtX2FkbWluJyxcbn1cblxuLy8vXG5leHBvcnQgaW50ZXJmYWNlIE1hcHdvcmtzVXNlclByb2ZpbGUgZXh0ZW5kcyBVc2VyUHJvZmlsZSB7XG4gIC8vLyBNYXB3b3JrcyB1c2VyIElEXG4gICdtYXB3b3JrczppZCc/OiBzdHJpbmc7XG5cbiAgLy8vIE1hcHdvcmtzIHVzZXJuYW1lIChhbiBlbWFpbCBhZGRyZXNzKVxuICAnbWFwd29ya3M6dXNlcm5hbWUnPzogc3RyaW5nO1xuXG4gIC8vL1xuICAnbWFwd29ya3M6YXR0cmlidXRlcyc/OiB7XG4gICAgW25hbWU6IHN0cmluZ106IGFueTtcbiAgfTtcblxuICAvLy8gTWFwd29ya3MgdXNlciByb2xlXG4gICdtYXB3b3Jrczpyb2xlJz86IE1hcHdvcmtzVXNlclJvbGU7XG5cbiAgLy8vIE1hcHdvcmtzIHVzZXIgdHlwZVxuICAnbWFwd29ya3M6dHlwZSc/OiBNYXB3b3Jrc1VzZXJUeXBlO1xuXG4gIC8vLyBNYXB3b3JrcyBvcmdhbmlzYXRpb24gSUQgKHRoYXQgdGhlIHVzZXIgYmVsb25ncyB0bylcbiAgJ21hcHdvcmtzOm9yZ2FuaXNhdGlvbic/OiBzdHJpbmc7XG5cbiAgLy8vIE1hcHdvcmtzIG9yZ2FuaXNhdGlvbiBuYW1lICh0aGF0IHRoZSB1c2VyIGJlbG9uZ3MgdG8pXG4gICdtYXB3b3JrczpvcmdhbmlzYXRpb25fbmFtZSc/OiBzdHJpbmc7XG5cbiAgLy8vIERlZmF1bHQgQUNMIGZvciB0aGlzIHVzZXJcbiAgJ21hcHdvcmtzOmRlZmF1bHRBY2wnPzoge1xuICAgIGZpbmQ/OiBBcnJheTxzdHJpbmc+O1xuICAgIHJlYWQ/OiBBcnJheTxzdHJpbmc+O1xuICAgIHdyaXRlPzogQXJyYXk8c3RyaW5nPjtcbiAgICByZW1vdmU/OiBBcnJheTxzdHJpbmc+O1xuICB9O1xuXG4gIC8vIFhYWCBUT0RPIENvbmZpcm1cbiAgLy8gcHJvZmlsZTogXCIvbGF0ZXN0L3VzZXJzL3VpYkt6aXdnR0E4cC12QWo3Qmd3SVwiLFxufVxuXG4vLy9cbmV4cG9ydCBpbnRlcmZhY2UgTWFwd29ya3NVc2VyIGV4dGVuZHMgVXNlciB7XG4gIHByb2ZpbGU6IE1hcHdvcmtzVXNlclByb2ZpbGU7XG59XG5cbi8vL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwd29ya3NVc2VyTWFuYWdlciBleHRlbmRzIFVzZXJNYW5hZ2VyIHtcbiAgLy8vXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzPzogTWFwd29ya3NVc2VyTWFuYWdlclNldHRpbmdzKTtcblxuICAvKipcbiAgICogQ3VzdG9tIE1hcHdvcmtzIG1ldGhvZCB0byBpbml0aWFsaXNlIHVzZXIgYXV0aCBzZXNzaW9uIGJ5IGNoZWNraW5nIGlmIHRoZXJlIGlzIGFuXG4gICAqIGV4aXN0aW5nIHNlc3Npb24gaW4gTG9jYWxTdG9yYWdlIGFuZCBwZXJmb3JtaW5nIGEgc2Vzc2lvbiByZW5ld2FsIGlmIHJlcXVpcmVkLlxuICAgKi9cbiAgcHVibGljIGluaXQoKTogUHJvbWlzZTxNYXB3b3Jrc1VzZXIgfCBudWxsPjtcblxuICAvLy9cbiAgcHVibGljIGdldFVzZXJJbmZvKHVzZXI6IFVzZXIpOiBQcm9taXNlPE1hcHdvcmtzVXNlclByb2ZpbGU+O1xuXG4gIC8vL1xuICBwdWJsaWMgc2lnbmluUG9wdXAoYXJncz86IFNpZ25pblBvcHVwQXJncyk6IFByb21pc2U8TWFwd29ya3NVc2VyPjtcblxuICAvLy9cbiAgcHVibGljIGdldFByb2ZpbGUodXNlcjogVXNlcik6IFByb21pc2U8TWFwd29ya3NVc2VyPjtcbn1cblxuLyoqXG4gKiBPbmNlIFN0dWRpbyBpcyBsb2FkZWQsIHRoZSBnbG9iYWwgcmVmZXJlbmNlIGBTdHVkaW9gIG9mIHR5cGVcbiAqIE1hcHdvcmtzU3R1ZGlvIGlzIGRlZmluZWQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcHdvcmtzU3R1ZGlvIHtcblxuICAvKipcbiAgICogSW5pdGlhbGlzZSBhIE1hcHdvcmtzIE1hcCBjb21wb25lbnQgd2l0aGluIHRoZSBzcGVjaWZpYyBIVE1MIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnRPclNlbGVjdG9yIGEgSFRNTCBlbGVtZW50IHNlbGVjdGlvbiAoc3RyaW5nIGUuZy4gYCNtYXBgKSBvciBIVE1MRWxlbWVudFxuICAgKiBAcGFyYW0gY29uZmlnIHRoZSBTdHVkaW8gTWFwIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGFkZGl0aW9uYWxDb25maWcgYWRkaXRpb25hbCB3ZWIgaW50ZXJmYWNlIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHB1YmxpYyBpbml0KFxuICAgIGVsZW1lbnRPclNlbGVjdG9yOiBzdHJpbmcgfCBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IE1hcHdvcmtzU3R1ZGlvQ29uZmlnT3B0aW9ucyxcbiAgICBhZGRpdGlvbmFsQ29uZmlnPzogeyBbbjogc3RyaW5nXTogYW55IH1cbiAgKTogTWFwd29ya3NNYXA7XG5cbiAgLy8vIFByb3ZpZGUgYWNjZXNzIHRvIFN0dWRpbydzIE9BdXRoMiBPcGVuSUQgQ29ubmVjdCAoT0lEQykgYXV0aCBjb21wb25lbnRcbiAgT2lkY0NsaWVudDoge1xuICAgIC8vL1xuICAgIE1hcHdvcmtzVXNlck1hbmFnZXI6IHR5cGVvZiBNYXB3b3Jrc1VzZXJNYW5hZ2VyO1xuICAgIC8vL1xuICAgIHNpZ25pbkNhbGxiYWNrKCk6IHZvaWQ7XG4gIH07XG5cbiAgY29yZToge1xuXG4gICAgZW50aXR5OiB7XG5cbiAgICAgIFRyZWVWZWN0b3JMYXllckVudGl0eTogdHlwZW9mIE1hcHdvcmtzVHJlZVZlY3RvckxheWVyRW50aXR5O1xuXG4gICAgfVxuXG4gIH1cblxuICAvLy8gUHJvdmlkZSBhY2Nlc3MgdG8gU3R1ZGlvJ3MgY29weSBvZiB0aGUgW1VuZGVyc2NvcmVdKGh0dHBzOi8vdW5kZXJzY29yZWpzLm9yZykgbGlicmFyeVxuICBfOiB0eXBlb2YgXztcblxuICAvLy8gUHJvdmlkZSBhY2Nlc3MgdG8gU3R1ZGlvJ3MgY29weSBvZiB0aGUgW0pRdWVyeV0oaHR0cHM6Ly9qcXVlcnkuY29tLykgbGlicmFyeVxuICAkOiBhbnk7IC8vIFhYWCBUT0RPXG59XG5cbi8qKlxuICogT25jZSBTdHVkaW8gaXMgbG9hZGVkLCB0aGUgZ2xvYmFsIHJlZmVyZW5jZSBgU3R1ZGlvYCBvZiB0eXBlXG4gKiBNYXB3b3Jrc1N0dWRpbyBpcyBkZWZpbmVkLlxuICovXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8vIG1hcDogYW55O1xuICAgIFN0dWRpbzogTWFwd29ya3NTdHVkaW87XG4gIH1cbn1cblxuIl19