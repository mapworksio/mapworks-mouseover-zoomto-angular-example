/*
 * this configuration needs to be updated if you are running locally or forked
 */

import { MapworksAccess, MapworksStudioConfigOptions } from "./mapworks";

const mapworksOrgUrl = 'https://app.mapworks.io';
const client_id = '3mvor82v8k8f6nbi4f8bpihsom';
const mapRef = 'map-osm-public';

/*
 * this configuration should generally work but may be adapted for your use
 */

const appUrl = window.location.origin;

const width = 400;
const left = (screen.width - width) / 2;
const height = 550;
const top = (screen.height - height) / 2;

const scope = [
  'openid',
  'email',
  'profile',
  'https://apis.mapworks.io/auth/mapsengine.superadmin',
  'https://apis.mapworks.io/auth/mapsengine',
  'https://apis.mapworks.io/auth/mapsengine.readonly',
  'https://apis.mapworks.io/auth/org-management',
  'https://apis.mapworks.io/auth/org-management.groups',
  'https://apis.mapworks.io/auth/org-management.readonly',
  'https://apis.mapworks.io/auth/org-subscriber',
  'https://apis.mapworks.io/auth/org-management.accounts',
  'https://apis.mapworks.io/auth/org-management.accounts.readonly',
  'https://apis.mapworks.io/auth/org-management.invitations',
  'https://apis.mapworks.io/auth/individual-subscriber',
].join(' ');

export const studioConfig: MapworksStudioConfigOptions = {
  mapworksPath: mapworksOrgUrl,
  mapRef,
  access: MapworksAccess.Anonymous,

  navigationControl: false,
  timeControl: false,
  scaleControl: true,
  toolbarControl: true,
  zoomControl: false,

  mapworksLoginProvider: {
    authority: mapworksOrgUrl, // /.well-known/openid-configuration
    client_id,
    redirect_uri: appUrl + '/?callback', // '/public/login-callback.html',
    silent_redirect_uri: appUrl + '/?callback', // '/public/login-callback.html',
    popup_redirect_uri: appUrl + '/?callback', // '/public/login-callback.html',
    post_logout_redirect_uri: appUrl,
    anonymousUser: 'noreply@public-anonymous.mapworks.io',
    popupWindowFeatures: {
      location: false,
      toolbar: false,
      width,
      height,
      left,
      top,
    },
    response_type: 'code',
    scope,
    prompt: 'select_account',
    automaticSilentRenew: true,
    loadUserInfo: true,
  },
};
